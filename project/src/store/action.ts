import {createAction} from '@reduxjs/toolkit';

export const selectCity = createAction('tabs/selectCity');
export const loadOffers = createAction('offers/loadOffers');
export const sortOffers = createAction('sort/sortOffers');
export const setHoveredOffer = createAction('offers/setHoveredOffer');
