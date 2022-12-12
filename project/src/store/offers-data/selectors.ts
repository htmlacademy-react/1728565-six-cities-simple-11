import { NameSpace } from '../../const';
import { OffersType, OfferType } from '../../types/offers';
import { ReviewsType } from '../../types/review';
import { State } from '../../types/state';

export const getOffersData = (state: State): OffersType => state[NameSpace.Offers].offers;
export const getOfferData = (state: State): OfferType | null => state[NameSpace.Offers].offer;
export const getNearOffersData = (state: State): OffersType | null => state[NameSpace.Offers].nearOffers;
export const getReviewsData = (state: State): ReviewsType => state[NameSpace.Offers].reviews;
export const getDataLoadingState = (state: State): boolean => state[NameSpace.Offers].isDataLoading;
