import type { ActionReturn } from 'svelte/action';

interface Return {
  'on:bind': (v: {detail: any}) => any;
}

export function bind(node: HTMLElement & {value: any}, value: any): ActionReturn<{}, Return> {
	function change(event: any) {
		value = event.detail.value;
		node.dispatchEvent(new CustomEvent('bind', {detail: value}))
	}

	node.value = value;
	node.addEventListener('value', change);

	return {
		update(v: any) {
			value = v;
			node.value = v;
		}
	};
}