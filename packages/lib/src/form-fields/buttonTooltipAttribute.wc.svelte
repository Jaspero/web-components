<svelte:options
        customElement={{
    tag: 'jp-buttonTooltipAttribute',
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
    export let tooltip = '';

    if (tooltip) {
        console.log('tooltip', tooltip);
    }
</script>

<button class="delete-button" tooltip="Delete">Delete</button>