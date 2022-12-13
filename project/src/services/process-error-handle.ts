import { TIMEOUT_SHOW_ERROR } from '../const';
import { store } from '../store';
import { setError } from '../store/app-process/app-process';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  // store.dispatch(clearErrorAction());
  setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
};
