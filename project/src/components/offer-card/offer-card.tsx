// import { OfferObjectType } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Hotel } from '../../types/hotels';

export default function OfferCard(props: {
  offer: Hotel;
  className: string;
  setHoveredCardActive: (offer: Hotel) => void;
  getClickedOffer: (offer: Hotel) => void;
}): JSX.Element {
  const { offer, className, setHoveredCardActive, getClickedOffer } = props;

  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => setHoveredCardActive(offer)}
      onClick={() => getClickedOffer(offer)}
    >
      {offer.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className='place-card__image'
            src={offer.previewImage}
            width='260'
            height='200'
            alt='Place image'
          />
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
            <span style={{ width: offer.rating }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</a>
        </h2>
        <p className='place-card__type'>{offer.type}</p>
      </div>
    </article>
  );
}
