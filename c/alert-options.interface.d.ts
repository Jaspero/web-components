export interface AlertOptions {
    title?: string;
    message?: string;
    host?: HTMLElement;
    state?: 'success' | 'error';
    duration?: number;
}
