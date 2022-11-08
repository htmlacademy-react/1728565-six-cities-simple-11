import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const citiesArr = [
  { cityName: 'Paris', href: '#' },
  { cityName: 'Cologne', href: '#' },
  { cityName: 'Brussels', href: '#' },
  { cityName: 'Amsterdam', href: '#' },
  { cityName: 'Hamburg', href: '#' },
  { cityName: 'Dusseldorf', href: '#' },
];

const placesArr = [
  {
    id: 1,
    placeMark: 'Premeum',
    photo: 'apartment-01.jpg',
    price: '120',
    rating: '80%',
    info: 'Beautiful & luxurious apartment at great location',
    placeType: 'Apartment',
    placeLink: '#',
  },
  {
    id: 2,
    photo: 'room.jpg',
    price: '80',
    rating: '80%',
    info: 'Wood and stone place',
    placeType: 'Private room',
    placeLink: '#',
  },
  {
    id: 3,
    photo: 'apartment-02.jpg',
    price: '132',
    rating: '80%',
    info: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    placeLink: '#',
  },
  {
    id: 4,
    placeMark: 'Premeum',
    photo: 'apartment-03.jpg',
    price: '180',
    rating: '100%',
    info: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    placeLink: '#',
  },
  {
    id: 5,
    photo: 'room.jpg',
    price: '80',
    rating: '80%',
    info: 'Wood and stone place',
    placeType: 'Private room',
    placeLink: '#',
  }
];

root.render(
  <React.StrictMode>
    <App citiesArr={citiesArr} placesArr={placesArr}/>
  </React.StrictMode>,
);
