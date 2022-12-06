/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import { City, PlaceOfferObjectType, Point, Points } from '../../types/types';
import Map from '../map/map';
import Reviews from '../reviews/reviews';

export default function Property(props: {placeOffer: PlaceOfferObjectType; city: City; points: Points}): JSX.Element {
  const {placeOffer, city, points} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const owner = placeOffer.owner;
  const reviews = placeOffer.reviews;

  return (
    <section className='property'>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {
            placeOffer.photoGallery.map((photo) => (
              <div className='property__image-wrapper' key=''>
                <img className='property__image' src={photo} alt='Photo studio' />
              </div>
            ))
          }
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {placeOffer.placeMark &&
            <div className='property__mark'>
              <span>{placeOffer.placeMark}</span>
            </div>}
          <div className='property__name-wrapper'>
            <h1 className='property__name'>
              {placeOffer.name}
            </h1>
          </div>
          <div className='property__rating rating'>
            <div className='property__stars rating__stars'>
              <span style={{width: placeOffer.ratingStars}}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='property__rating-value rating__value'>{placeOffer.ratingNum}</span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              {placeOffer.type}
            </li>
            <li className='property__feature property__feature--bedrooms'>
              {placeOffer.rooms}
            </li>
            <li className='property__feature property__feature--adults'>
              {placeOffer.capacity}
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{placeOffer.price}</b>
            <span className='property__price-text'>&nbsp;night</span>
          </div>
          <div className='property__inside'>
            <h2 className='property__inside-title'>What&apos;s inside</h2>
            <ul className='property__inside-list'>
              {
                placeOffer.features.map((feature) => (
                  <li className='property__inside-item' key=''>
                    {feature}
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='property__host'>
            <h2 className='property__host-title'>Meet the host</h2>
            <div className='property__host-user user'>
              <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                <img className='property__avatar user__avatar' src={owner.photo} width='74' height='74' alt='Host avatar' />
              </div>
              <span className='property__user-name'>
                {owner.name}
              </span>
              {owner.status &&
                <span className='property__user-status'>
                  Pro
                </span>}
            </div>
            <div className='property__description'>
              {
                placeOffer.info.map((text) => (<p className='property__text' key=''>{text}</p>))
              }
            </div>
          </div>
        </div>
        <Reviews reviews={reviews}/>
      </div>
      <Map
        className='property__map'
        city={city}
        points={points}
        selectedPoint={selectedPoint}
      />
    </section>
  );
}
