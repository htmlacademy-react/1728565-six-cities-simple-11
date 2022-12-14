import { createSelector } from '@reduxjs/toolkit';
import { NameSpace, SortTypes } from '../../const';
import { City } from '../../types/city';
import { OffersType } from '../../types/offers';
import { State } from '../../types/state';
import { getOffersData } from '../offers-data/selectors';


export const getCity = (state: State): City => state[NameSpace.App].city;
export const getSort = (state: State): string => state[NameSpace.App].sort;
export const getSortList = (state: State): string[] => state[NameSpace.App].sortList;
export const getError = (state: State): string | null => state[NameSpace.App].error;

const getSortedOffers = (hotelsList: OffersType, sortType: string) => {
  switch (sortType) {
    case SortTypes.PRICE_LOW:
      return hotelsList.sort((a, b) => a.price - b.price);
    case SortTypes.PRICE_HIGH:
      return hotelsList.sort((a, b) => b.price - a.price);
    case SortTypes.RATING_TOP:
      return hotelsList.sort((a, b) => b.rating - a.rating);
    default:
      return hotelsList.sort((a, b) => a.id - b.id);
  }
};

export const getFilteredOffers = createSelector(
  getOffersData,
  getCity,
  getSort,
  (offers, city, sort) => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    return getSortedOffers(filteredOffers, sort);
  }
);

export const calcRating = (rating: number) => `${(Math.round(rating) / 5 * 100).toString()}%`;

export const parseDate = (date: string, datetime = true ) => {
  const utcDate = new Date(date);
  const fullMonthNum = (utcDate.getMonth() + 1) < 10 ? `0${(utcDate.getMonth() + 1)}` : (utcDate.getMonth() + 1);
  const fullMonthText = utcDate.toLocaleString('default', { month: 'long' });

  const dateTime = `${utcDate.getFullYear()}-${fullMonthNum}-${utcDate.getDate()}`;
  const dateString = `${fullMonthText} ${utcDate.getFullYear()}`;
  return datetime ? dateTime : dateString;
};
