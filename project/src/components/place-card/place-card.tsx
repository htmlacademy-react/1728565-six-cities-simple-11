/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PlaceCardObjectType } from '../../types/types';
import { Link } from 'react-router-dom';

export default function PlaceCard(props: {place: PlaceCardObjectType; className: string; returnActiveCard: number}): JSX.Element {
  const place = props.place;

  return (
    <article
      onMouseEnter={() => props.returnActiveCard(place.id)}
      className={`${props.className} place-card`}
    >
      {place.placeMark &&
        <div className='place-card__mark'>
          <span>{place.placeMark}</span>
        </div>}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={place.placeLink}>
          <img className='place-card__image' src={`img/${place.photo}`} width='260' height='200' alt='Place image' />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{place.price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>

        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: place.rating}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href={place.placeLink}>{place.info}</a>
        </h2>
        <p className='place-card__type'>{place.placeType}</p>
      </div>
    </article>
  );
}
