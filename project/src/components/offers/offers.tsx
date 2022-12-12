import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import OfferCard from '../offer-card/offer-card';
import Sort from '../sort/sort';
import { useState } from 'react';
import { OffersType } from '../../types/offers';
import { getCity } from '../../store/app-process/selectors';
import MainEmpty from '../main-empty/main-empty';

export default function Offers(props: {offers: OffersType}): JSX.Element {
  const { offers } = props;

  const [selectedPoints, setSelectedPoints] = useState<OffersType | null>(
    null
  );

  const selectedCity = useAppSelector(getCity);

  const setHoveredCardActive = (hoveredOffers: OffersType) => {
    setSelectedPoints(hoveredOffers);
  };

  const resetActiveCard = () => {
    setSelectedPoints(null);
  };

  return (
    <div className='cities'>
      <div className={`cities__places-container container ${offers.length ? 'cities__places-container--empty' : ''}`}>
        {
          offers.length ?
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
                  />
                ))}
              </div>
            </section>
            :
            <MainEmpty city={selectedCity}/>
        }
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
