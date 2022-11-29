import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES_TABS_ARR } from './mocks/citiesTab';
import { placesCardsArr } from './mocks/offers';
import { placeOffer } from './mocks/offer';
import { nearPlacesCardsArr } from './mocks/nearPlaces';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      citiesArr={CITIES_TABS_ARR}
      placesCardsArr={placesCardsArr}
      placeOffer={placeOffer}
      nearPlacesCardsArr={nearPlacesCardsArr}
    />
  </React.StrictMode>,
);
