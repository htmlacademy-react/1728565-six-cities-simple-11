import Header from '../../components/header/header';
import PlaceCard from '../../components/place-card/place-card';
import Property from '../../components/property/property';
import { City, PlaceOfferObjectType, Points } from '../../types/types';

export default function Offer(props: {offer: PlaceOfferObjectType; nearOffers: PlaceOfferObjectType[]; city: City; points: Points}): JSX.Element {
  const {offer, nearOffers, city, points} = props;

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <Property
          offer={offer}
          city={city}
          points={points}
        />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {
                nearOffers.map((nearOffer) => <PlaceCard className='near-places__card' offer={nearOffer} key={nearOffer.id} returnActiveCard={0}/>)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
