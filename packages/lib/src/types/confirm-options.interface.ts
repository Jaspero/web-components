export interface ConfirmOptions {
	title?: string;
	message?: string;
	
	// @default true
	closable?: boolean;
	// @default body
	host?: HTMLElement;
	// @default null
	duration?: number | null;
}