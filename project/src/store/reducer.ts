/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createReducer} from '@reduxjs/toolkit';
import {selectCity, loadOffers} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Amsterdam',
  offers,
  filteredOffers: offers.filter((offer) => offer.city === 'Amsterdam'),
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
      state.filteredOffers = state.offers.filter((offer) => offer.city === state.city);
    })
    .addCase(loadOffers, (state) => state);
});
