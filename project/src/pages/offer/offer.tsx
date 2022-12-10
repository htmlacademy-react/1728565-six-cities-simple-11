import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import OfferCard from '../../components/offer-card/offer-card';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOffer } from '../../store/action';
import { getNearOffers } from '../../store/reducer';
import { Hotel } from '../../types/hotels';

export default function Offer(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Hotel | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();
  const property = useAppSelector((store) => store.offer);
  const nearOffers = useAppSelector(getNearOffers);

  if (property === undefined) {
    return <Navigate to={AppRoute.Root} />;
  }

  const getMapOffers = () => {
    const offers = [property];
    if (nearOffers) {
      return offers.concat(nearOffers);
    }
    return offers;
  };

  const setHoveredCardActive = (offer: Hotel) => {
    setSelectedPoint(offer);
  };

  const getClickedOffer = (offer: Hotel) => {
    dispatch(getOffer(offer));
  };

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {property.images.map((photo) => (
                <div className='property__image-wrapper' key={photo}>
                  <img
                    className='property__image'
                    src={photo}
                    alt='Photo studio'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {property.isPremium && (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              )}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{property.title}</h1>
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: property.rating }}></span>
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>
                  {property.rating}
                </span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>
                  {property.type}
                </li>
                <li className='property__feature property__feature--bedrooms'>
                  {property.bedrooms}
                </li>
                <li className='property__feature property__feature--adults'>
                  {property.maxAdults}
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{property.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {property.goods.map((feature) => (
                    <li className='property__inside-item' key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                    <img
                      className='property__avatar user__avatar'
                      src={property.host.avatarUrl}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>
                    {property.host.name}
                  </span>
                  {property.host.isPro && (
                    <span className='property__user-status'>Pro</span>
                  )}
                </div>
                <div className='property__description'>
                  {property.description}
                </div>
              </div>
            </div>
            {/* <Reviews reviews={reviews}/> */}
          </div>
          <Map
            className='property__map'
            city={property.city}
            offers={getMapOffers()}
            selectedPoint={selectedPoint}
          />
        </section>
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <div className='near-places__list places__list'>
              {nearOffers &&
                nearOffers.map((nearOffer) => (
                  <OfferCard
                    className='near-places__card'
                    offer={nearOffer}
                    key={nearOffer.id}
                    setHoveredCardActive={setHoveredCardActive}
                    getClickedOffer={getClickedOffer}
                  />
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
