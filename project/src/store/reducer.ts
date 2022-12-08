/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createReducer } from '@reduxjs/toolkit';
import { selectCity, loadOffers, sortOffers, getHotels } from './action';
import { offers } from '../mocks/offers';
import { OfferObjectType } from '../types/types';
import { SortTypes } from '../const';
import { SORTING } from '../mocks/sorting';

const initialState = {
  city: 'Amsterdam',
  offers,
  filteredOffers: offers.filter((offer) => offer.city === 'Amsterdam'),
  sorting: SORTING,
  sort: 'Popular',
  hotels: [],
};

const getSortedOffers = (offersList: OfferObjectType[], sortType: string) => {
  switch (sortType) {
    case SortTypes.PRICE_LOW:
      return offersList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case SortTypes.PRICE_HIGH:
      return offersList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case SortTypes.RATING_TOP:
      return offersList.sort((a, b) => parseFloat(b.ratingNum) - parseFloat(a.ratingNum));
    default:
      return offersList.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  }
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
      state.filteredOffers = state.offers.filter(
        (offer) => offer.city === state.city
      );
      state.filteredOffers = getSortedOffers(state.filteredOffers, state.sort);
    })
    .addCase(loadOffers, (state) => state)
    .addCase(sortOffers, (state, action) => {
      state.sort = action.payload.sort;
      state.filteredOffers = getSortedOffers(state.filteredOffers, state.sort);
    })
    .addCase(getHotels, (state, action) => {
      state.hotels = action.payload;
    });
});
