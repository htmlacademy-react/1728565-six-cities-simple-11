import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { CITY } from '../../const';
import HistoryRouter from '../history-route/history-route';
import MainEmpty from './main-empty';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  APP: { city: CITY },
});


describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainEmpty city={CITY} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText(`We could not find any property available at the moment in ${CITY.name}`)).toBeInTheDocument();
  });
});
