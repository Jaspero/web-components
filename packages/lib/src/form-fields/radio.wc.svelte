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
  import { createEventDispatcher, onMount } from 'svelte';

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
        if (requiredValidationMessage) {
          attachedInternals.setValidity({ customError: true }, requiredValidationMessage);
        }
      }
    }
    dispatch('value', value);
  }

  onMount(() => {
    if (typeof options == 'string') options = JSON.parse(options);
  });
</script>

<div style={`display: flex; flex-direction: ${inline ? 'row' : 'column'}`}>
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

<style>
  label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1rem;
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
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    padding: 0.125rem;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    -moz-transition: 0.2s;
    transition: 0.2s;
  }

  .fake-button > span > span {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    -moz-transition: 0.2s;
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
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: var(--background-tertiary);
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: 0.2s;
    -o-transition: 0.2s;
    -moz-transition: 0.2s;
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
