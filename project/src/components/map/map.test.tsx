import { render, screen } from '@testing-library/react';
import { CITY } from '../../const';
import { generateOffer } from '../../mocks/mocks';
import Map from './map';

const offers = [generateOffer(), generateOffer(), generateOffer()];
const offer = generateOffer();
const className = '';

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map
        className={className}
        offers={offers}
        selectedPoints={[offer]}
        city={CITY}
      />
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
