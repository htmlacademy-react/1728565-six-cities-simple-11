import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus, SORT_LIST } from '../../const';
import { generateEmail, generateOffer, generateOffers, generateReview } from '../../mocks/mocks';
import Offer from './offer';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const newOffer = generateOffer();
const newOffers = generateOffers();
const newNearOffers = [generateOffer(), generateOffer(), generateOffer()];
const newReviews = [generateReview(), generateReview()];
const newEmail = generateEmail();
const newCity = newOffers[0].city;
const store = mockStore({
  OFFERS: { offer: newOffer, nearOffers: newNearOffers, reviews:  newReviews},
  APP: { city: newCity, sort: 'Popular', sortList: SORT_LIST },
  USER: { userEmail: newEmail, authorizationStatus: AuthorizationStatus.Auth}
});

describe('Page: Offer', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Offer />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(newOffer.description)).toBeInTheDocument();
  });
});
