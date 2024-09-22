import type { ActionReturn } from 'svelte/action';

interface Return {
  'on:click_outside': () => void;
}

export function clickOutside(node: HTMLElement): ActionReturn<{}, Return> {
  function dispatch() {
    // @ts-ignore
    node.dispatchEvent(new CustomEvent('click_outside', node));
  }

  function handleClick(event: MouseEvent) {
    if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
      dispatch();
    }
  }

  function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      dispatch();
    }
  }

  window.addEventListener('keydown', handleEscape, true);
  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
      window.removeEventListener('keydown', handleEscape, true);
    }
  };
}
