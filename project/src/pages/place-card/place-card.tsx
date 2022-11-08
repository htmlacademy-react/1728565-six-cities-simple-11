type PlaceObj = {
  id: number;
  placeMark?: string;
  photo: string;
  price: string;
  rating: string;
  info: string;
  placeType: string;
  placeLink?: string;
};

export default function PlaceCard(props: {place: PlaceObj}): JSX.Element {
  const place = props.place;

  return (
    <article className="cities__card place-card">
      {place.placeMark &&
        <div className="place-card__mark">
          <span>{place.placeMark}</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={place.placeLink}>
          <img className="place-card__image" src={`img/${place.photo}`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: place.rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={place.placeLink}>{place.info}</a>
        </h2>
        <p className="place-card__type">{place.placeType}</p>
      </div>
    </article>
  );
}
