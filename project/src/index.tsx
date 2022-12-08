import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
// import { offer } from './mocks/offer';
import { nearOffers } from './mocks/nearOffers';
import { Provider } from 'react-redux';
import { store } from './store';
import { CITIES } from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={CITIES}
        offers={offers}
        nearOffers={nearOffers}
      />
    </Provider>
  </React.StrictMode>,
);
