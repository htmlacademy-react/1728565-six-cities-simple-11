import {
  fetchOffersAction,
  fetchOfferAction,
  fetchNearOffersAction,
  fetchReviewsAction,
} from './../api-actions';
import { OffersData } from '../../types/state';
import { offersData } from './offers-data';
import { generateOffer, generateOffers, generateReview } from '../../mocks/mocks';

describe('Reducer: offersData', () => {
  let state: OffersData;
  const newOffers = generateOffers();
  const newOffer = generateOffer();
  const newNearOffers = generateOffers();
  const newReviews = generateReview();

  beforeEach(() => {
    state = {
      offers: [],
      offer: null,
      nearOffers: null,
      reviews: [],
      isDataLoading: false,
    };
  });

  it('should return initial state', () => {
    expect(offersData.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  it('should change data loading status to "True"', () => {
    expect(
      offersData.reducer(state, { type: fetchOffersAction.pending.type })
    ).toEqual({ ...state, isDataLoading: true });
  });

  it('should load offers, set data loading to "False" and update state', () => {
    state = { ...state, isDataLoading: true };
    expect(
      offersData.reducer(state, {
        type: fetchOffersAction.fulfilled.type,
        payload: newOffers,
      })
    ).toEqual({
      ...state,
      offers: newOffers,
      isDataLoading: false,
    });
  });

  it('should load an offer and update state', () => {
    expect(
      offersData.reducer(state, {
        type: fetchOfferAction.fulfilled.type,
        payload: newOffer,
      })
    ).toEqual({ ...state, offer: newOffer });
  });

  it('should load near offers and update state', () => {
    expect(
      offersData.reducer(state, {
        type: fetchNearOffersAction.fulfilled.type,
        payload: newNearOffers,
      })
    ).toEqual({ ...state, nearOffers: newNearOffers });
  });

  it('should load offer reviews and update state', () => {
    expect(
      offersData.reducer(state, {
        type: fetchReviewsAction.fulfilled.type,
        payload: newReviews,
      })
    ).toEqual({ ...state, reviews: newReviews });
  });
});
