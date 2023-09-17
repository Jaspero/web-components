export interface ConfirmOptions {
  title?: string;
  message?: string;
  // @default 'no'
  reject: string;
  // @default 'yes'
  accept: string;
  // @default false
  closable?: boolean;
  // @default body
  host?: HTMLElement;
}
