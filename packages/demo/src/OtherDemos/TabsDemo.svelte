<script lang="ts">
  import '../../../../dist/tabs.wc.js';
  let tabsComponent: { previous: () => any; next: () => any };
</script>

<jp-tabs bind:this={tabsComponent}>
  <jp-tab title="one">One</jp-tab>
  <jp-tab title="two">Two</jp-tab>
  <jp-tab title="three">Three</jp-tab>
</jp-tabs>

<button on:click={() => tabsComponent.previous()}>PREVIOUS</button>
<button on:click={() => tabsComponent.next()}>NEXT</button>
