import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import Tabs from './tabs';
import { generateOffer } from '../../mocks/mocks';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const newCity = generateOffer().city;
const store = mockStore({
  APP: { city: newCity, cities: [newCity] },
});

describe('Component: Tabs', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Tabs />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(newCity.name)).toBeInTheDocument();
  });
});
