import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CITIES, CITY, NameSpace, SORT_LIST } from '../../const';
import { City } from '../../types/city';
import { AppProcess } from '../../types/state';

const initialState: AppProcess = {
  city: CITY,
  cities: CITIES,
  sort: 'Popular',
  sortList: SORT_LIST,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    sortOffers: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setError: (state, action: PayloadAction<string| null>) => {
      state.error = action.payload;
    },
  },
});

export const {selectCity, sortOffers, setError} = appProcess.actions;


