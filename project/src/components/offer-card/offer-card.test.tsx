/* eslint-disable @typescript-eslint/no-empty-function */
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { generateOffer, generateReview } from '../../mocks/mocks';
import Offer from '../../pages/offer/offer';
import { OffersType } from '../../types/offers';
import HistoryRouter from '../history-route/history-route';
import OfferCard from './offer-card';

const mockStore = configureMockStore();
const history = createHashHistory();
const newOffer = generateOffer();
const newNearOffers = [generateOffer(), generateOffer(), generateOffer()];
const newReviews = generateReview();
const store = mockStore({
  OFFERS: {offer: newOffer, nearOffers: newNearOffers, reviews: [newReviews]},
  USER: {authorizationStatus: AuthorizationStatus.Auth,}

});


describe('Component: OfferCard', () => {

  const setHoveredCardActive = (hoveredOffers: OffersType) => {};
  const resetActiveCard = () => {};

  it('should redirect to an offer page', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='*'
              element={
                <OfferCard
                  className=''
                  offer={newOffer}
                  setHoveredCardActive={setHoveredCardActive}
                  resetActiveCard={resetActiveCard}
                />
              }
            />
            <Route path={`/offer/${newOffer.id}`} element={<Offer />}/>
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByText(newOffer.title));
    expect(screen.getByText(newOffer.description)).toBeInTheDocument();

  });
});
