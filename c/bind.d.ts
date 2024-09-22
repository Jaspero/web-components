import { ActionReturn } from 'svelte/action';
interface Return {
    'on:bind': (v: {
        detail: any;
    }) => any;
}
export declare function bind(node: HTMLElement & {
    value: any;
}, value: any): ActionReturn<{}, Return>;
export {};
