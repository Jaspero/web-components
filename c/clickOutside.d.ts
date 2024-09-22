import { ActionReturn } from 'svelte/action';
interface Return {
    'on:click_outside': () => void;
}
export declare function clickOutside(node: HTMLElement): ActionReturn<{}, Return>;
export {};
