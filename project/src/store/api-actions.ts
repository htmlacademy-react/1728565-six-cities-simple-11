import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { OffersType, OfferType } from '../types/offers';
import { ReviewsType } from '../types/review';
import { AppDispatch, State } from '../types/state';
import { UserData } from '../types/user-data';
import { redirectToRoute } from './action';
import { setUserCredentials } from './user-process/user-process';

export const fetchOffersAction = createAsyncThunk<
  OffersType,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OffersType>(APIRoute.Hotels);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  OfferType | null,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffer', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<OfferType>(`${APIRoute.Hotels}/${id}`);
    return data;
  } catch {
    dispatch(redirectToRoute(AppRoute.NotFound));
    return null;
  }
});

export const fetchNearOffersAction = createAsyncThunk<
  OffersType | null,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearOffers', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<OffersType | null>(`${APIRoute.Hotels}/${id}/nearby`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  ReviewsType,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async (id, { dispatch, extra: api }) => {
  const {data} = await api.get<ReviewsType>(`${APIRoute.Reviews}/${id}`);
  return data;
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  const {data} = await api.get<UserData>(APIRoute.Login);
  dispatch(setUserCredentials(data.email));
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: { token },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(token);
  dispatch(setUserCredentials(email));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(setUserCredentials(null));
});
