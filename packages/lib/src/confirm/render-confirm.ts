import type { ConfirmOptions } from '../types/confirm-options.interface';

export async function renderConfirm(
  options?: ConfirmOptions,
  callback?: (action?: string) => void
) {
  options = {
    host: document.body,
    duration: null,
    closable: true,
    ...(options || {})
  };

  const confirmEl = document.createElement('jp-confirm') as any;

  confirmEl.title = options.title || '';
  confirmEl.message = options.message || '';

  options.host.appendChild(confirmEl);

  function clear(action: string) {
    options.host.removeChild(confirmEl);

    if (callback) {
      callback(action);
    }
  }

  ['yes', 'no'].forEach((event) => {
    confirmEl.addEventListener(event, () => clear(event));
  });

  if (options.closable) {
    confirmEl.addEventListener('close', () => clear('close'));
  }

  if (options.duration) {
    setTimeout(() => clear('timeout'), options.duration);
  }
}
