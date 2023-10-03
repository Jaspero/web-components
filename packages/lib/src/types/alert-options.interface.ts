export interface AlertOptions {
  title?: string;
  message?: string;

  // @default body
  host?: HTMLElement;
  // @default error
  state?: 'success' | 'error';
  // @default 5000
  duration?: number;
}
