import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { City } from '../types/city';
import { Hotel, Hotels } from '../types/hotels';

export const selectCity = createAction<City>('tabs/selectCity');
export const sortOffers = createAction<string>('sort/sortOffers');
export const getHotels = createAction<Hotels>('data/getHotels');
export const getOffer = createAction<Hotel | null>('data/getOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/checkAuth');
export const saveUserCredentials = createAction<string | null>('user/saveUserCredentials');
export const setError = createAction<string | null>('data/setError');
export const setDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');
