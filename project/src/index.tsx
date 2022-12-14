import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';

import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import { store } from './store/index';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
