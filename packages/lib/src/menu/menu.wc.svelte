<svelte:options
  customElement={{
    tag: 'jp-menu',
    shadow: 'open'
  }}
/>

<script lang="ts">
  export let label = 'Menu';
  // Default needs to be invisible rather than unrendered because of .offsetHeight
  // It's pushed left by default so it doesn't expand the document size when not open
  let menuStyle = 'opacity: 0; left: -100vw;';
  let menuEl;
  let bindingEl;
  let open = false;

  function toggleMenu() {
    open = !open;
    if (!open) {
      menuStyle = 'opacity: 0; left: -100vw;';
    } else {
      const rect = bindingEl.getBoundingClientRect();
      const availableSpaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = menuEl.offsetHeight;
      const availableSpaceRight = window.innerWidth - rect.left;
      const dropleftWidth = menuEl.offsetWidth;
      menuStyle = `
            top: ${availableSpaceBelow < dropdownHeight ? -menuEl.offsetHeight : rect.height}px;
            left: ${availableSpaceRight < dropleftWidth ? -menuEl.offsetWidth + rect.width : '0'}px;
        `;
    }
  }
</script>

<div class="wrapper">
  <button class="menu-button" on:click={() => toggleMenu()} bind:this={bindingEl}>
    {@html label}
  </button>

  <div class="menu" bind:this={menuEl} style={menuStyle}>
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: inline-block;
    position: relative;
  }

  .menu-button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 10px;
    font-weight: 600;
  }

  .menu-button:hover {
    background-color: var(--background-tertiary);
  }

  .menu {
    background-color: var(--background-primary);
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 100;
    max-width: 280px;
    padding: 8px 0;
  }
</style>
