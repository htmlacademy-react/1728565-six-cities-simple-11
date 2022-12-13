import { City } from '../types/city';
import { name, date, internet, address, random } from 'faker';
import { OfferType } from '../types/offers';
import { ReviewType } from '../types/review';

export const gerenateCity = (): City => ({
  name: address.cityName(),
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10,
  },
});

export const generateOffer = (): OfferType => ({
  bedrooms: Math.floor(Math.random() * 5) + 1,
  city: gerenateCity(),
  description: random.words(),
  goods: Array.from(random.words((Math.floor(Math.random() * 5)) + 1)),
  host: {
    avatarUrl: internet.url(),
    id: Math.floor(Math.random() * 100) + 1,
    isPro: Math.random() < 0.5,
    name: name.title(),
  },
  id: Math.floor(Math.random() * 100) + 1,
  images: [internet.url(), internet.url()],
  isPremium: Math.random() < 0.5,
  location: {
    latitude: Number(address.latitude()),
    longitude: Number(address.longitude()),
    zoom: 10,
  },
  maxAdults: 4,
  previewImage: internet.url(),
  price: Math.floor(Math.random() * 1000) + 100,
  rating: 5,
  title: address.streetName(),
  type: 'hotel',
});

export const generateOffers = (num = Math.floor(Math.random() * 50) + 1) => {
  const generatedOffers = [];
  for (let i = 0; i < num; i++) {
    generatedOffers.push(generateOffer());
  }

  return generatedOffers;
};

export const generateReview = (): ReviewType => ({
  comment: random.words(Math.floor(Math.random() * 15)),
  date: date.recent().toDateString(),
  id: Math.floor(Math.random() * 100),
  rating: Math.random() * 5,
  user: {
    avatarUrl: internet.url(),
    id: Math.floor(Math.random() * 100),
    isPro: true,
    name: name.title(),
  },
});

export const generateEmail = (): string => internet.email();
