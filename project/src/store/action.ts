import { createAction } from '@reduxjs/toolkit';
import { Hotels } from '../types/hotels';

export const selectCity = createAction('tabs/selectCity');
export const loadOffers = createAction('offers/loadOffers');
export const sortOffers = createAction('sort/sortOffers');
export const getHotels = createAction<Hotels>('data/getHotels');
