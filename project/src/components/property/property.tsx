import { PlaceOfferObjectType } from '../../types/types';
import PropertyMap from '../propertyMap/propertyMap';
import Reviews from '../reviews/reviews';

export default function Property(props: {placeOffer: PlaceOfferObjectType}): JSX.Element {
  const offer = props.placeOffer;
  const owner = props.placeOffer.owner;
  const reviewsArr = props.placeOffer.reviews;

  return (
    <section className='property'>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {
            offer.photoGallery.map((photo) => (
              <div className='property__image-wrapper' key=''>
                <img className='property__image' src={photo} alt='Photo studio' />
              </div>
            ))
          }
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {offer.placeMark &&
            <div className='property__mark'>
              <span>{offer.placeMark}</span>
            </div>}
          <div className='property__name-wrapper'>
            <h1 className='property__name'>
              {offer.name}
            </h1>
          </div>
          <div className='property__rating rating'>
            <div className='property__stars rating__stars'>
              <span style={{width: offer.ratingStars}}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='property__rating-value rating__value'>{offer.ratingNum}</span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              {offer.type}
            </li>
            <li className='property__feature property__feature--bedrooms'>
              {offer.rooms}
            </li>
            <li className='property__feature property__feature--adults'>
              {offer.capacity}
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{offer.price}</b>
            <span className='property__price-text'>&nbsp;night</span>
          </div>
          <div className='property__inside'>
            <h2 className='property__inside-title'>What&apos;s inside</h2>
            <ul className='property__inside-list'>
              {
                offer.features.map((feature) => (
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
                offer.info.map((text) => (<p className='property__text' key=''>{text}</p>))
              }
            </div>
          </div>
        </div>
        <Reviews reviewsArr={reviewsArr}/>
      </div>
      <PropertyMap />
    </section>
  );
}
