import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import OfferCard from '../offer-card/offer-card';
import Sort from '../sort/sort';
import { useState } from 'react';
import { OfferObjectType } from '../../types/types';
import { CITIES } from '../../mocks/cities';

export default function Offers(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OfferObjectType | undefined>(
    undefined
  );

  const selectedCity = useAppSelector((state) => state.city);
  const cityMap = CITIES.filter((city) => city.title === selectedCity)[0];
  const offers = useAppSelector((state) => state.filteredOffers);

  const setHoveredCardActive = (offer: OfferObjectType) => {
    // dispatch(setHoveredOffer({hoveredOfferId: id}));
    setSelectedPoint(offer);
  };

  const resetActiveCard = () => {
    setSelectedPoint(undefined);
  };

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>312 places to stay in {selectedCity}</b>
          <Sort />
          <div className='cities__places-list places__list tabs__content' onMouseLeave={resetActiveCard}>
            {offers.map((offer) => (
              <OfferCard
                className='cities__card'
                offer={offer}
                key={`offercard-${offer.id}`}
                setHoveredCardActive={setHoveredCardActive}
              />
            ))}
          </div>
        </section>
        <div className='cities__right-section'>
          <Map
            className='cities__map'
            city={cityMap}
            offers={offers}
            selectedPoint={selectedPoint}
          />
        </div>
      </div>
    </div>
  );
}
