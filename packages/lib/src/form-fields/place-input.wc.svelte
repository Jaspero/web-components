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
        }
      };
    }
  }}
/>

<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { clickOutside } from '../clickOutside';

  export let apiKey: String;
  export let value: string = '';
  export let attachedInternals: ElementInternals;
  export let startingLatitude: number = 37.77493;
  export let startingLongitude: number = -122.41942;
  export let mapType: 'roadmap' | 'satellite' | 'hybrid' | 'terrain' = 'roadmap';
  export let zoom: number = 8;
  export let placeholder: string = 'Search for a place';
  export let mapId: String;
  export let returnedValue: 'simple' | 'extended' = 'extended';
  export let enableMap = true;
  export let gestureHandling: 'cooperative' | 'greedy' | 'auto' = 'auto';
  export let searchType: object = []; 
  export let autocompleteComponentRestrictions: object; 
  export let countryRestriction: object; 
  export let restrictionAlertMessage: string;
  export let required = true;
  export let requiredValidationMessage: string;
  export let validationMessages: {
    required?: string;
  } = {};
  export const getValue = () => value;

  let openMap = false;
  let marker;
  let map;
  let searchInput: HTMLInputElement;
  let coordinates = '';
  let mapStyle;

  const dispatch = createEventDispatcher();

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.head.append(script);
    });
  }

  async function initMap() {
    await loadScript(
      `https://maps.googleapis.com/maps/api/js?&key=${apiKey}&libraries=places`
    );

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

    const input = document.getElementById('searchInput');
    const options = {
      bounds: defaultBounds,
      fields: ['address_components', 'formatted_address', 'geometry', 'icon', 'name'],
      strictBounds: false,
      types: searchType,
      componentRestrictions: autocompleteComponentRestrictions
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

      if (returnedValue == 'simple') {
        dispatch('address', { address: place.formatted_address });
      } else if (returnedValue == 'extended') {
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
  }

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
    const input = document.getElementById('searchInput');
    const latlngStr = coordinates.split(',', 2);
    const latlng = {
      lat: parseFloat(latlngStr[0]),
      lng: parseFloat(latlngStr[1])
    };

    if (countryRestriction) {
      geocoder
        .geocode({
          location: latlng,
          componentRestrictions: countryRestriction
        })
        .then((response) => {
          if (response.results[0]) {
            result = response.results[0].formatted_address;
          } else {
            window.alert('No results found');
            dispatch('addressNotFound');
          }
        });
      geocoder
        .geocode({
          location: latlng
        })
        .then((response) => {
          if (response.results[0]) {
            let searchResult = response.results[response.results.length - 1].formatted_address;
            if (searchResult === result) {
              input.value = response.results[0].formatted_address;
              if (returnedValue == 'simple') {
                dispatch('address', { address: response.results[0].formatted_address });
              } else if (returnedValue == 'extended') {
                dispatch('address', { address: response.results[0].formatted_address });
                dispatch('latitude', { lat: latlng.lat });
                dispatch('longitude', { lng: latlng.lng });
              }
            } else {
              window.alert(restrictionAlertMessage);
              dispatch('restrictedArea');
            }
          } else {
            window.alert('No results found');
            dispatch('addressNotFound');
          }
        });
    } else {
      geocoder
        .geocode({
          location: latlng
        })
        .then((response) => {
          if (response.results[0]) {
            input.value = response.results[0].formatted_address;
            if (returnedValue == 'simple') {
              dispatch('address', { address: response.results[0].formatted_address });
            } else if (returnedValue == 'extended') {
              dispatch('address', { address: response.results[0].formatted_address });
              dispatch('latitude', { lat: latlng.lat });
              dispatch('longitude', { lng: latlng.lng });
            }
          } else {
            window.alert('No results found');
            dispatch('address not found');
          }
        });
    }
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
  }

  onMount(() => {
    initMap();
  });

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
</script>

{#if enableMap}
  <div class="lookup-box" use:clickOutside on:click_outside={() => (openMap = false)}>
    <div class="nav">
      <label class="field">
        <input
          class="searchInput"
          id="searchInput"
          bind:this={searchInput}
          bind:value
          {required}
          type="text"
          class:active={openMap}
          {placeholder}
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
  <div class="lookup-box">
    <div class="nav">
      <label class="field">
        <input
          class="searchInput"
          id="searchInput"
          bind:this={searchInput}
          {required}
          type="text"
          {placeholder}
        />
      </label>
      <div id="map" class="map-field" style="display:none"></div>
    </div>
  </div>
{/if}

<style>
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
    height: 2.5rem;
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
