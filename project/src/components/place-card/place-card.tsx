/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PlaceOfferObjectType } from '../../types/types';
import { Link } from 'react-router-dom';

export default function PlaceCard(props: {offer: PlaceOfferObjectType; className: string; returnActiveCard: number}): JSX.Element {
  const {offer, className, returnActiveCard} = props;

  return (
    <article
      onMouseEnter={() => returnActiveCard(offer.id)}
      className={`${className} place-card`}
    >
      {offer.placeMark &&
        <div className='place-card__mark'>
          <span>{offer.placeMark}</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`offer/${offer.id}`}>
          <img className='place-card__image' src={offer.photoGallery[0]} width='260' height='200' alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{offer.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>

        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: offer.ratingStars}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href={`offer/${offer.id}`}>{offer.name}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}
