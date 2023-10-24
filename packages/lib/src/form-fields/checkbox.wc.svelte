<svelte:options
  customElement={{
    tag: 'jp-checkbox',
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

  export let options: Array<{ label?: string; value: string; checked: boolean; disabled?: boolean }> = [];
  export let minSelects: number = 0;
  export let maxSelects: number | null = null;

  export let minselectsValidationMessage;
  export let maxselectsValidationMessage;
  export let validationMessages = {};

  export const getValue = () => options.filter(el => el.checked).map(el => el.value);
  
  const dispatch = createEventDispatcher();

  export const reportValidity = () => {
    attachedInternals.reportValidity()
  }
  
  $: if(Array.isArray(options)) {
    const checkedAmount = options.filter((el) => el.checked).length
    if (checkedAmount < minSelects) {
      attachedInternals.setValidity({ customError: true }, 
        minselectsValidationMessage || validationMessages.minselects || 'Below limit checks.'
      );
    } else if (checkedAmount > maxSelects) {
      attachedInternals.setValidity({ customError: true }, 
        maxselectsValidationMessage || validationMessages.maxselects || 'Above limit checks.'
      );
    } else {
      attachedInternals.setValidity({});
    }

    dispatch('value', options.filter(el => el.checked).map(el => el.value));
  }

  onMount(() => {
    if(typeof options == 'string') options = JSON.parse(options)
    maxSelects = options.length;
  });
</script>

<div class="flex flex-col gap-2">
  {#each options as option}
    <label class="flex items-center gap-2 {option.disabled ? 'opacity-50' : ''}">
      <input type="checkbox"
             name={option.value}
             bind:checked={option.checked}
             disabled={option.disabled} />
             {#if option.label}
              {@html option.label}
            {:else}
              {option.value}
            {/if}
    </label>
  {/each}
</div>
