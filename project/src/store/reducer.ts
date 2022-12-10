import { createReducer, createSelector } from '@reduxjs/toolkit';
import { selectCity, sortOffers, getHotels, requireAuthorization, setDataLoadingStatus, saveUserCredentials, getOffer } from './action';
// import { offers } from '../mocks/offers';
// import { OfferObjectType } from '../types/types';
import { AuthorizationStatus, CITY, SortTypes } from '../const';
import { SORTING } from '../mocks/sorting';
import { Hotel, Hotels } from '../types/hotels';
// import { checkAuthAction, loginAction, logoutAction } from './api-actions';
import { State } from '../types/state';
import { City } from '../types/city';


type InitialState = {
  city: City;
  sorting: Sorting[];
  sort: string;
  hotels: Hotels;
  offer: Hotel | undefined;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  error: string | null;
  isQuestionsDataLoading: boolean;
}

type Sorting = {
  id: string;
  name: string;
}

const initialState: InitialState = {
  city: CITY,
  sorting: SORTING,
  sort: 'Popular',
  hotels: [],
  offer: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  error: null,
  isQuestionsDataLoading: false,
};

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.authorizationStatus;
export const getUserEmail = (state: State): string | null => state.userEmail;

export const getOffers = (state: State): Hotels => state.hotels;
export const getCity = (state: State): string => state.city.name;
export const getSort = (state: State): string => state.sort;
export const getOfferData = (state: State): Hotel | undefined => state.offer;


const getSortedOffers = (offersList: Hotels, sortType: string) => {
  switch (sortType) {
    case SortTypes.PRICE_LOW:
      return offersList.sort((a, b) => a.price - b.price);
    case SortTypes.PRICE_HIGH:
      return offersList.sort((a, b) => b.price - a.price);
    case SortTypes.RATING_TOP:
      return offersList.sort((a, b) => b.rating - a.rating);
    default:
      return offersList.sort((a, b) => a.id - b.id);
  }
};

const getNearOffersList = (offer: Hotel, offersList: Hotels) => {
  const nearOffers: Hotels = [];
  offersList.forEach((offerItem) => {
    if (nearOffers.length < 3) {
      nearOffers.push(offerItem);
    }
  });
  return nearOffers;
};

export const getFilteredOffers = createSelector(
  getOffers,
  getCity,
  getSort,
  (offers, city, sort) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    return getSortedOffers(filteredOffers, sort);
  }
);

export const getNearOffers = createSelector(
  getOfferData,
  getOffers,
  getCity,
  (offer, offers, city) => {
    if (offer === undefined) {
      return;
    }
    const filteredOffers = offers.filter((offerItem) => offerItem.city.name === city);
    return getNearOffersList(offer, filteredOffers);
  }
);

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getHotels, (state, action) => {
      state.hotels = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isQuestionsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserCredentials, (state, action) => {
      state.userEmail = action.payload;
    });
});
