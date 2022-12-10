import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES_TABS_ARR } from './mocks/citiesTab';
import { offers } from './mocks/offers';
// import { offer } from './mocks/offer';
import { nearOffers } from './mocks/nearOffers';
import { POINTS } from './mocks/points';
import { CITY } from './mocks/city';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities={CITIES_TABS_ARR}
        offers={offers}
        nearOffers={nearOffers}
        points={POINTS}
        city={CITY}
      />
    </Provider>

  </React.StrictMode>,
);
