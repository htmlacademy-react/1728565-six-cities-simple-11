/* eslint-disable no-console */
import { createReducer, createSelector } from '@reduxjs/toolkit';
import { selectCity, sortOffers, getHotels, requireAuthorization, setDataLoadingStatus, saveUserCredentials, getHotel } from './action';
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
  hotel: Hotel | null;
  nearHotels: Hotels | null;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  error: string | null;
  isHotelsDataLoading: boolean;
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
  hotel: null,
  nearHotels: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  error: null,
  isHotelsDataLoading: true,
};

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state.authorizationStatus;
export const getUserEmail = (state: State): string | null => state.userEmail;

export const getHotelsData = (state: State): Hotels => state.hotels;
export const getCity = (state: State): string => state.city.name;
export const getSort = (state: State): string => state.sort;
export const getHotelData = (state: State): Hotel | null => state.hotel;


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

export const getFilteredOffers = createSelector(
  getHotelsData,
  getCity,
  getSort,
  (offers, city, sort) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city);
    return getSortedOffers(filteredOffers, sort);
  }
);

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getHotels, (state, action) => {
      state.hotels = action.payload;
    })
    .addCase(getHotel, (state, action) => {
      state.hotel = action.payload;
    })
    .addCase(selectCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isHotelsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserCredentials, (state, action) => {
      state.userEmail = action.payload;
    });
});
