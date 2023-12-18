import type { AlertOptions } from '../types/alert-options.interface';

export async function renderAlert(options?: AlertOptions, callback?: (action?: string) => void) {
  options = {
    duration: 5000,
    state: 'error',
    host: document.body,
    ...(options || {})
  };

  const alertEl = document.createElement('jp-alert') as any;

  alertEl.title = options.title || '';
  alertEl.message = options.message || '';
  alertEl.state = options.state;

  options.host.appendChild(alertEl);

  function clear(action: string) {
    options.host.removeChild(alertEl);

    if (callback) {
      callback(action);
    }
  }

  alertEl.addEventListener('close', () => clear('close'));

  if (options.duration) {
    setTimeout(() => clear('timeout'), options.duration);
  }
}
