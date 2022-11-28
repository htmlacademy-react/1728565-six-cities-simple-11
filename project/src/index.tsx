import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CITIES_TABS_ARR = [
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
    placeLink: '/offer/1',
  },
  {
    id: 2,
    photo: 'room.jpg',
    price: '80',
    rating: '80%',
    info: 'Wood and stone place',
    placeType: 'Private room',
    placeLink: '/offer/1',
  },
  {
    id: 3,
    photo: 'apartment-02.jpg',
    price: '132',
    rating: '80%',
    info: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    placeLink: '/offer/1',
  },
  {
    id: 4,
    placeMark: 'Premeum',
    photo: 'apartment-03.jpg',
    price: '180',
    rating: '100%',
    info: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
    placeLink: '/offer/1',
  },
  {
    id: 5,
    photo: 'room.jpg',
    price: '80',
    rating: '80%',
    info: 'Wood and stone place',
    placeType: 'Private room',
    placeLink: '/offer/1',
  }
];

const nearPlacesArr = [
  {
    id: 1,
    placeMark: 'Premeum',
    photo: 'apartment-01.jpg',
    price: '120',
    rating: '80%',
    info: 'Beautiful & luxurious apartment at great location',
    placeType: 'Apartment',
    placeLink: '/offer/1',
  },
  {
    id: 2,
    photo: 'room.jpg',
    price: '80',
    rating: '80%',
    info: 'Wood and stone place',
    placeType: 'Private room',
    placeLink: '/offer/1',
  },
  {
    id: 3,
    photo: 'apartment-02.jpg',
    price: '132',
    rating: '80%',
    info: 'Canal View Prinsengracht',
    placeType: 'Apartment',
    placeLink: '/offer/1',
  },
];

// const placeOffer = {
//   id: '1',
//   placeMark: 'Premeum',
//   photoGallery: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg',],
//   name: 'Beautiful & luxurious apartment at great location',
//   ratingStars: '80%',
//   ratingNum: '4.8',
//   type: 'Apartment',
//   rooms: '3 Bedrooms',
//   capacity: 'Max 4 adults',
//   price: '120',
//   features: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge',],
//   owner: {
//     photo: 'img/avatar-angelina.jpg',
//     name: 'Angelina',
//     status: 'Pro',
//   },
//   info: [
//     'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
//     'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
//   ],
//   // reviews: [
//   //   {
//   //     author: 'Max',
//   //     ratingStars: '80%',
//   //     text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
//   //     dateText: 'April 2019',
//   //     dateTime: '2019-04-24',
//   //   }
//   // ],
// };

root.render(
  <React.StrictMode>
    <App citiesArr={CITIES_TABS_ARR} placesArr={placesArr} nearPlacesArr={nearPlacesArr}/>
  </React.StrictMode>,
);
