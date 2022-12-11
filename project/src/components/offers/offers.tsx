import { useAppDispatch, useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import OfferCard from '../offer-card/offer-card';
import Sort from '../sort/sort';
import { useState } from 'react';
// import { CITIES } from '../../mocks/cities';
import { getFilteredOffers } from '../../store/reducer';
import { Hotel, Hotels } from '../../types/hotels';
import { getOffer } from '../../store/action';

export default function Offers(): JSX.Element {
  const [selectedPoints, setSelectedPoints] = useState<Hotels | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector(getFilteredOffers);

  const setHoveredCardActive = (hoveredOffers: Hotels) => {
    setSelectedPoints(hoveredOffers);
  };

  const resetActiveCard = () => {
    setSelectedPoints(undefined);
  };

  const getClickedOffer = (offer: Hotel) => {
    dispatch(getOffer(offer));
  };

  return (
    <div className='cities'>
      <div className='cities__places-container container'>
        <section className='cities__places places'>
          <h2 className='visually-hidden'>Places</h2>
          <b className='places__found'>{offers.length} places to stay in {selectedCity.name}</b>
          <Sort />
          <div className='cities__places-list places__list tabs__content'>
            {offers.map((offer) => (
              <OfferCard
                className='cities__card'
                offer={offer}
                key={`offercard-${offer.id}`}
                setHoveredCardActive={setHoveredCardActive}
                resetActiveCard={resetActiveCard}
                getClickedOffer={getClickedOffer}
              />
            ))}
          </div>
        </section>
        <div className='cities__right-section'>
          <Map
            className='cities__map'
            city={selectedCity}
            offers={offers}
            selectedPoints={selectedPoints}
          />
        </div>
      </div>
    </div>
  );
}
