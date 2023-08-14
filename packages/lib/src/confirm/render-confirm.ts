import type { ConfirmOptions } from '../types/confirm-options.interface';

export async function renderConfirm(
  options?: ConfirmOptions,
  callback?: (action?: string) => void
) {
  options = {
    host: document.body,
    closable: false,
    reject: 'no',
    accept: 'yes',
    ...(options || {})
  };

  const confirmEl = document.createElement('jp-confirm') as any;

  confirmEl.title = options.title || '';
  confirmEl.message = options.message || '';
  confirmEl.reject = options.reject;
  confirmEl.accept = options.accept;
  confirmEl.closable = options.closable;

  options.host.appendChild(confirmEl);

  function clear(action: string) {
    options.host.removeChild(confirmEl);

    if (callback) {
      callback(action);
    }
  }

  confirmEl.addEventListener('confirmation', (e) => clear(e.detail));

  if (options.closable) {
    confirmEl.addEventListener('close', () => clear('close'));
  }
}
