import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { CITY, SORTLIST } from '../../const';
import { generateOffers } from '../../mocks/mocks';
import { OffersType } from '../../types/offers';
import HistoryRouter from '../history-route/history-route';
import Offers from './offers';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  APP: { city: CITY, sortList: SORTLIST },
});

describe('Component: Offers', () => {
  it('should render offers cards correctly povided with offers data', () => {
    const offers = generateOffers();
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Offers offers={offers} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(offers[0].title)).toBeInTheDocument();
  });

  it('should render main empty correctly povided with no offers', () => {
    const offers: OffersType = [];
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Offers offers={offers} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(
      screen.getByText(
        `We could not find any property available at the moment in ${CITY.name}`
      )
    ).toBeInTheDocument();
  });
});
