import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Property from '../../components/property/property';
import { City, PlaceCardObjectType, PlaceOfferObjectType, Points } from '../../types/types';

export default function Offer(props: {placeOffer: PlaceOfferObjectType; nearPlacesCards: PlaceCardObjectType[]; city: City; points: Points}): JSX.Element {
  const {placeOffer, nearPlacesCards, city, points} = props;

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <Property
          placeOffer={placeOffer}
          city={city}
          points={points}
        />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {
                nearPlacesCards.map((place) => <PlaceCard className='near-places__card' place={place} key={place.id}/>)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
