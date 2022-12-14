import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { SORTLIST } from '../../const';
import Sort from './sort';
import { generateOffer } from '../../mocks/mocks';


const mockStore = configureMockStore();
const history = createMemoryHistory();
const newCity = generateOffer().city;
const defaultSort = 'Popular';
const store = mockStore({
  APP: { city: newCity, sort: defaultSort, sortList: SORTLIST },
});

describe('Component: Sort', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sort />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
