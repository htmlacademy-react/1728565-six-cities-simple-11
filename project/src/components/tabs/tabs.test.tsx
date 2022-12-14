import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { CITIES, CITY } from '../../const';
import Tabs from './tabs';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  APP: { city: CITY },
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

    CITIES.forEach((city) =>
      expect(screen.getByText(city.name)).toBeInTheDocument()
    );
  });
});
