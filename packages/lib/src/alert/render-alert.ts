import type {AlertOptions} from '../types/alert-options.interface';

export async function renderAlert(options?: AlertOptions) {
	options = {
		duration: 5000,
		state: 'error',
		host: document.body,
		...options || {},
	}

	const alertEl = document.createElement('jp-alert') as any;

	alertEl.title = options.title || '';
	alertEl.message = options.message || '';
	alertEl.state = options.state;

	options.host.appendChild(alertEl);

	alertEl.addEventListener('close', () => {
		options.host.removeChild(alertEl);
	});

	if (options.duration) {
		setTimeout(() => {
			options.host.removeChild(alertEl);
		}, options.duration);
	}
}