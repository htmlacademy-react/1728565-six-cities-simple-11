import { render, screen } from '@testing-library/react';
import { generateOffer } from '../../mocks/mocks';
import Map from './map';

const newOffers = [generateOffer(), generateOffer(), generateOffer()];
const newOffer = generateOffer();
const newCity = newOffer.city;
const className = '';

describe('Component: Map', () => {
  it('should render correctly', () => {
    render(
      <Map
        className={className}
        offers={newOffers}
        selectedPoints={[newOffer]}
        city={newCity}
      />
    );

    expect(screen.getByTestId('map')).toBeInTheDocument();
  });
});
