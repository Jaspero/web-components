<svelte:options
  customElement={{
    tag: 'jp-radio',
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
  import {createEventDispatcher, onMount} from 'svelte';

  export let attachedInternals: ElementInternals;

  export let options: Array<{ name?: string; value: any; disabled?: boolean }> | string = [];
  export let required: boolean = false;
  export let value: string = '';
  export let name: string | null = null;
  export let inline: boolean = false;

  export let requiredValidationMessage;

  let inputEl;

  export const getValue = () => value;

  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity();
  };

  $: {
    attachedInternals.checkValidity();
    if (inputEl) {
      if (inputEl.validity.valueMissing) {
        attachedInternals.setValidity(
          { valueMissing: true },
          requiredValidationMessage || inputEl.validationMessage,
          inputEl
        );
      } else {
        attachedInternals.setValidity({});
      }
    }
    dispatch('value', value);
  }

  onMount(() => {
    if (typeof options == 'string') options = JSON.parse(options);
  });
</script>

<div class="radio-group">
  <label class="group-label">
    Options
    {#if required}
      <span class="required-indicator">*</span>
    {/if}
  </label>
  <div class="options-container" style={`display: flex; flex-direction: ${inline ? 'row' : 'column'}`}>
    {#each options as option}
      <label class:disabled={option.disabled}>
        <input
          type="radio"
          bind:this={inputEl}
          {name}
          value={option.value}
          {required}
          disabled={option.disabled}
          bind:group={value}
        />
        <span class="fake-button">
          <span>
            <span></span>
          </span>
        </span>
        <span>
          {#if option.name}
            {option.name}
          {:else}
            {option.value}
          {/if}
        </span>
      </label>
    {/each}
  </div>
</div>

<style>
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .group-label {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .required-indicator {
    margin-left: 8px;
    font-size: 1rem;
  }

  .options-container {
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin-bottom: 8px;
  }

  label.disabled {
    pointer-events: none;
    opacity: 0.33;
  }

  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  .fake-button {
    position: relative;
    display: block;
    padding: 0.5rem;
  }

  .fake-button > span {
    display: block;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--border-primary);
    border-radius: 50%;
    padding: 0.125rem;
    transition: 0.2s;
  }

  .fake-button > span > span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: 0.2s;
  }

  .fake-button::before {
    z-index: -1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    background-color: var(--background-tertiary);
    border-radius: 50%;
    transition: 0.2s;
  }

  .fake-button:hover::before {
    width: 100%;
    height: 100%;
  }

  input:checked + .fake-button > span {
    border-color: var(--active-color);
  }

  input:checked + .fake-button > span > span {
    background-color: var(--active-color);
  }
</style>
