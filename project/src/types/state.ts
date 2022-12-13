import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { City } from './city.js';
import { OffersType, OfferType } from './offers.js';
import { ReviewsType } from './review.js';


export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userEmail: UserEmail;
}

export type AppProcess = {
  city: City;
  sort: string;
  sortList: string[];
  error: string | null;
}

export type UserEmail = string | null;

export type OffersData = {
  offers: OffersType;
  offer: OfferType | null;
  nearOffers: OffersType | null;
  reviews: ReviewsType;
  isDataLoading: boolean;
}
