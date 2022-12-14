import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus, SORTLIST } from '../../const';
import { generateEmail, generateOffers } from '../../mocks/mocks';
import Main from './main';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const newOffers = generateOffers();
const newEmail = generateEmail();
const newCity = newOffers[0].city;
const store = mockStore({
  OFFERS: { offers: newOffers },
  APP: { city: newCity, sort: 'Popular', sortList: SORTLIST },
  USER: { userEmail: newEmail, authorizationStatus: AuthorizationStatus.Auth}
});

describe('Page: Main', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Main />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(newOffers[0].title)).toBeInTheDocument();
  });
});
