import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {
  AppRoute,
  AuthorizationStatus,
  SORTLIST,
} from '../../const';
import {
  generateOffer,
  generateOffers,
  generateReview,
} from '../../mocks/mocks';
import HistoryRouter from '../history-route/history-route';
import App from './app';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const newOffers = generateOffers();
const newNearOffers = [generateOffer(), generateOffer(), generateOffer()];
const newReviews = [generateReview()];
const newSort = 'Popular';

const store = mockStore({
  APP: {
    city: newOffers[0].city,
    cities: [newOffers[0].city, newOffers[1].city],
    sort: newSort,
    sortList: SORTLIST,
  },
  OFFERS: {
    offers: newOffers,
    offer: newOffers[0],
    nearOffers: newNearOffers,
    reviews: newReviews,
    isDataLoading: false,
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userEmail: null,
  },
});

describe('App: Routing', () => {
  it('should render correctly', () => {
    history.push(AppRoute.Root);
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(newOffers[0].city.name)).toBeInTheDocument();
    expect(screen.getByText(newOffers[0].title)).toBeInTheDocument();
  });

  it('should render Offer page navigating to /offer/id', () => {
    history.push(`${AppRoute.Offer}/${newOffers[0].id}`);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(newOffers[0].description)).toBeInTheDocument();
  });

  it('should display loading screen if data loading', () => {
    history.push(AppRoute.Root);
    const storeDataLoading = mockStore({
      OFFERS: {
        isDataLoading: true,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
        userEmail: null,
      },
    });
    render(
      <Provider store={storeDataLoading}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should render NotFound page when page is not found', () => {
    history.push(AppRoute.NotFound);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <App />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });
});
