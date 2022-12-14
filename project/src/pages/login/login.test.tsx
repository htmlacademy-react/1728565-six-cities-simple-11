import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus } from '../../const';
import userEvent from '@testing-library/user-event';
import Login from './login';
import { Route, Routes } from 'react-router-dom';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.NoAuth },
  APP: { userEmail: null },
});

describe('Page: Login', () => {
  it('should render correctly', async () => {
    history.push('/login');
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path='*'
              element={
                <Login />
              }
            />
            <Route path='/'/>
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email'), '123@test.com');
    await userEvent.type(screen.getByTestId('password'), '123abc');

    expect(screen.getByDisplayValue(/123@test.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/123abc/i)).toBeInTheDocument();
  });
});
