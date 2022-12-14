import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import { generateReview } from '../../mocks/mocks';
import Reviews from './reviews';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const review = generateReview();
const reviews = [review];
const store = mockStore({
  OFFERS: { reviews: reviews },
});

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Reviews />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getAllByText(review.comment)[0]).toBeInTheDocument();
  });
});
