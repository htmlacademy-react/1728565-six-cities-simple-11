import { ReviewObjectType } from '../../types/types';

export default function Review(props: {review: ReviewObjectType}): JSX.Element {
  const {author, ratingStars, text, dateText, dateTime} = props.review;

  return(
    <>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className='reviews__avatar user__avatar' src='img/avatar-max.jpg' width='54' height='54' alt='Reviews avatar' />
        </div>
        <span className='reviews__user-name'>
          {author}
        </span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{width: ratingStars}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>
          {text}
        </p>
        <time className='reviews__time' dateTime={dateTime}>{dateText}</time>
      </div>
    </>
  );
}
