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
  import './radio.wc.pcss';

  export let attachedInternals: ElementInternals;

  export let options: Array<{ name?: string; value: any; disabled?: boolean }> | string = [];
  export let required: boolean = false;
  export let value: string = '';
  export let name: string | null = null;
  export let inline: boolean = false;

  export let requiredValidationMessage;
  export let label = '';

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
  $: displayLabel = required ? `${label} *` : label;
</script>

{#if label}
  <div class="jp-radio-label">
    {@html displayLabel}
  </div>
{/if}
<div class={`jp-radio-box ${inline ? 'jp-radio-box-inline' : ''}`}>
  {#each options as option}
    <label class="jp-radio-label" class:jp-radio-label-disabled={option.disabled}>
      <input
        class="jp-radio-input"
        type="radio"
        bind:this={inputEl}
        {name}
        value={option.value}
        {required}
        disabled={option.disabled}
        bind:group={value}
      />
      <span class="jp-radio-fake-button">
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
