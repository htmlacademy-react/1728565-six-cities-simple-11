import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import Property from '../../components/property/property';
import { OfferObjectType } from '../../types/types';

export default function Offer(props: {offer: OfferObjectType; nearOffers: OfferObjectType[]}): JSX.Element {
  const {offer, nearOffers } = props;

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <Property
          offer={offer}
          nearOffers={nearOffers}
        />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {
                nearOffers.map((nearOffer) => <OfferCard className='near-places__card' offer={nearOffer} key={nearOffer.id}/>)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
