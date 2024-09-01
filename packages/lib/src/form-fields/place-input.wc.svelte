<svelte:options
  customElement={{
    tag: 'jp-place-input',
    shadow: 'none',
    extend: (customElementConstructor) => {
      return class extends customElementConstructor {
        static formAssociated = true;

        constructor() {
          super();
          this.attachedInternals = this.attachInternals();
          this.attachedInternals.role = 'textbox';
        }
      };
    }
  }}
/>

<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { clickOutside } from '../clickOutside';
  import { loadScript } from '../utils/scriptLoader';

  export let apiKey: string;
  export let value = '';
  export let attachedInternals: ElementInternals;
  export let startingLatitude = 37.77493;
  export let startingLongitude = -122.41942;
  export let mapType: 'roadmap' | 'satellite' | 'hybrid' | 'terrain' = 'roadmap';
  export let zoom = 8;
  export let label = '';
  export let labelType: 'inside' | 'outside' = 'inside';
  export let name = '';
  export let id: string | null = null;
  export let inputFocused = false;
  export let disabled = false;
  export let readonly = false;
  export let placeholder = '';
  export let mapId: string;
  export let returnedValue: 'simple' | 'extended' = 'extended';
  export let enableMap = true;
  export let gestureHandling: 'cooperative' | 'greedy' | 'auto' = 'auto';
  export let types: string[] = [];
  export let componentRestrictions: object;
  export let required = false;
  export let requiredValidationMessage: string;
  export let resultValidationMessage: string;
  export let validationMessages: {
    required?: string;
    results?: string;
  } = {};
  export const getValue = () => value;

  export const validity = attachedInternals.validity;
  export const validationMessage = attachedInternals.validationMessage;
  export const reportValidity = () => attachedInternals.reportValidity();
  export const checkValidity = () => attachedInternals.checkValidity();

  let openMap = false;
  let marker;
  let map;
  let searchInput: HTMLInputElement;
  let coordinates = '';
  let mapStyle;

  const dispatch = createEventDispatcher();

  window.initMap = async function () {
    const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

    const center = { lat: startingLatitude, lng: startingLongitude };
    map = new Map(document.getElementById('map'), {
      center: center,
      zoom: zoom,
      mapTypeId: mapType,
      mapId: mapId,
      gestureHandling: gestureHandling
    });

    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1
    };

    const geocoder = new google.maps.Geocoder();

    const input = searchInput;
    const options = {
      bounds: defaultBounds,
      fields: ['address_components', 'formatted_address', 'geometry', 'icon', 'name'],
      strictBounds: false,
      types: types,
      componentRestrictions: componentRestrictions
    };

    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.setFields(['place_id', 'geometry', 'name']);

    autocomplete.addListener('place_changed', () => {
      infoWindow.close();
      const place = autocomplete.getPlace();
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(13);
      }
      const formatted_address = autocomplete.getPlace().formatted_address;
      placeMarker(place.geometry.location);
      const latlngStr = coordinates.split(',', 2);
      const latlng = {
        lat: parseFloat(latlngStr[0]),
        lng: parseFloat(latlngStr[1])
      };

      if (returnedValue === 'simple') {
        dispatch('address', { address: place.formatted_address });
      } else if (returnedValue === 'extended') {
        dispatch('address', { address: place.formatted_address });
        dispatch('latitude', { lat: latlng.lat });
        dispatch('longitude', { lng: latlng.lng });
      }
    });

    const infoWindow = new google.maps.InfoWindow();
    const infoWindowContent = document.getElementById('infowindow-content');
    infoWindow.setContent(infoWindowContent);

    map.addListener('click', function (event) {
      placeMarker(event.latLng);
      geocodeLatLng(geocoder, map, infoWindow);
    });
  };

  function placeMarker(location) {
    if (marker != null) {
      marker.map = null;
    }
    marker = new google.maps.marker.AdvancedMarkerElement({
      position: location,
      map: map,
      title: String(location)
    });
    map.panTo(marker.position);
    coordinates = marker.position.lat + ', ' + marker.position.lng;
  }

  function geocodeLatLng(
    geocoder: google.maps.Geocoder,
    map: google.maps.Map,
    infowindow: google.maps.InfoWindow
  ) {
    let result;
    const input = searchInput;
    const latlngStr = coordinates.split(',', 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1])
    };

    geocoder
      .geocode({
        location: latlng
      })
      .then((response) => {
        if (response.results[0]) {
          value = response.results[0].formatted_address;
          if (returnedValue === 'simple') {
            dispatch('address', { address: response.results[0].formatted_address });
          } else if (returnedValue === 'extended') {
            dispatch('address', { address: response.results[0].formatted_address });
            dispatch('latitude', { lat: latlng.lat });
            dispatch('longitude', { lng: latlng.lng });
          }
        } else {
          attachedInternals.setValidity(
            { customError: true },
            resultValidationMessage || validationMessages.results || 'No results found'
          );
          dispatch('addressNotFound');
        }
      });
  }

  function toggleMap() {
    const rect = searchInput.getBoundingClientRect();
    const availableSpaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = 420;
    let style: string = '';
    if (availableSpaceBelow < dropdownHeight) {
      style = `
        bottom: ${window.innerHeight - rect.top}px;
        left: ${rect.left}px;
      `;
    } else {
      style = `
        top: ${rect.bottom}px;
        left: ${rect.left}px;
      `;
    }
    mapStyle = style;
    openMap = !openMap;
    if(openMap){
      searchInput.focus();
    }
  }

  $: {
    attachedInternals.checkValidity();
    if (searchInput) {
      if (searchInput.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || validationMessages.required || searchInput.validationMessage,
          searchInput
        );
      } else {
        attachedInternals.setValidity({});
      }
    }

    attachedInternals.setFormValue(value);
    dispatch('value', { value });
  }

  onMount(async () => {
    try {
      await loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap`
      );
    } catch (error) {
      console.error('Failed to load the Google Maps script', error);
    }
    if(inputFocused){
      searchInput.focus();
    }
  });
</script>

{#if enableMap}
  {#if label && labelType === 'outside'}
    <div class="label">
      {@html label}
    </div>
  {/if}
  <div class="lookup-box" use:clickOutside on:click_outside={() => (openMap = false)}>
    <div class="nav">
      <label class="field" class:required>
        {#if label && labelType === 'inside'}
          <span class="field-label" class:move={inputFocused || value || openMap}>{@html label}</span>
        {/if}
        <input
          class={`searchInput ${labelType === 'outside' || !label ? '' : 'searchInput-padding'}`}
          type="text"
          aria-hidden={disabled || readonly}
          tabindex={disabled || readonly ? -1 : 0}
          class:active={openMap}
          {id}
          {disabled}
          {readonly}
          {required}
          {name}
          {placeholder}
          bind:this={searchInput}
          bind:value
          on:focus={() => (inputFocused = true)}
          on:blur={() => (inputFocused = false)}
        />
        <button class="button" class:active={openMap} on:click|preventDefault={toggleMap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
            />
          </svg>
        </button>
      </label>
    </div>
    <div class="overlay" class:disabled={!openMap} style={mapStyle}>
      <div id="map" class="map-field">
        <div id="infowindow-content"></div>
      </div>
    </div>
  </div>
{:else}
  {#if label && labelType === 'outside'}
    <div class="label">
      {@html label}
    </div>
  {/if}
  <div class="lookup-box">
    <div class="nav">
      <label class="field" class:required>
        {#if label && labelType === 'inside'}
          <span class="field-label" class:move={inputFocused || value}>{@html label}</span>
        {/if}
        <input
          class={`searchInput ${labelType === 'outside' || !label ? '' : 'searchInput-padding'}`}
          type="text"
          aria-hidden={disabled || readonly}
          tabindex={disabled || readonly ? -1 : 0}
          class:active={openMap}
          {id}
          {disabled}
          {readonly}
          {required}
          {name}
          {placeholder}
          bind:this={searchInput}
          bind:value
          on:focus={() => (inputFocused = true)}
          on:blur={() => (inputFocused = false)}
        />
      </label>
      <div id="map" class="map-field" style="display:none"></div>
    </div>
  </div>
{/if}

<style>
  .label {
    margin-top: 0.5rem;
    margin-bottom: 0.125rem;
    font-size: 0.875rem;
  }

  .field-label {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 1rem;
    -webkit-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -o-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    -moz-transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
    transition:
      transform 0.3s,
      top 0.3s,
      font-size 0.3s;
  }

  .field-label.move {
    top: 0.25rem;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    font-size: 0.75rem;
  }
  .field.required .field-label::after {
    content: ' *';
  }

  .nav {
    position: relative;
    display: inline-block;
  }

  .lookup-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #map {
    height: 400px;
    width: 100%;
  }

  .searchInput {
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    padding: 10px;
    border-radius: 0.25rem;
    box-sizing: border-box;
    border: 1px solid var(--border-primary);
    outline: none;
  }

  .searchInput:focus {
    border: 1px solid var(--primary-color);
  }

  .searchInput::placeholder {
    opacity: 0;
    -webkit-transition: opacity 0.3s;
    -o-transition: opacity 0.3s;
    -moz-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .searchInput.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: var(--primary-color);
  }

  .searchInput:after {
    background-image: none !important;
    height: 0px;
  }

  .searchInput-padding {
    padding: 1.5rem 0.75rem calc(0.5rem - 2px);
  }

  .field-label.move + .searchInput:-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .searchInput::-moz-placeholder {
    opacity: 1;
  }
  .field-label.move + .searchInput:-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .searchInput::-ms-input-placeholder {
    opacity: 1;
  }
  .field-label.move + .searchInput::placeholder {
    opacity: 1;
  }

  .field {
    width: 100%;
  }

  button {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
  }

  button.active {
    color: var(--primary-color);
    transition: 0.2s;
  }

  .overlay {
    z-index: 100;
    position: absolute;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-width: 370px;
    max-height: 420px;
    width: 100%;
    padding: 0.7rem;
    overflow-y: hidden;
    -webkit-border-bottom-left-radius: 0.25rem;
    -moz-border-radius-bottomleft: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    -webkit-border-bottom-right-radius: 0.25rem;
    -moz-border-radius-bottomright: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    -webkit-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.16);
    background-color: var(--background-primary);
  }

  .overlay.disabled {
    display: none;
  }

  .map-field {
    border-radius: 0.25rem;
  }

</style>
