import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '../../components/history-route/history-route';
import { AppRoute, AuthorizationStatus, SORTLIST } from '../../const';
import {
  generateOffer,
  generateOffers,
  generateReview,
} from '../../mocks/mocks';
import Main from '../main/main';
import NotFound from './404';

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

describe('Page: Not found', () => {
  it('should render NotFound page when page is not found', () => {
    render(
      <HistoryRouter history={history}>
        <NotFound />
      </HistoryRouter>
    );

    expect(screen.getByText(/Error 404/i)).toBeInTheDocument();
  });

  it('should redirect to the Main page clicking on link back', async () => {
    history.push('/*');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={'/*'} element={<NotFound />} />
            <Route path={AppRoute.Root} element={<Main />}/>
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByText('Return to the main page'));
    expect(screen.getByText(newOffers[0].title)).toBeInTheDocument();
  });
});
