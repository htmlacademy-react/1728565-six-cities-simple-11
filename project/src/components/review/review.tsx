import { calcRating, parseDate } from '../../store/app-process/selectors';
import { ReviewType } from '../../types/review';

export default function Review(props: { review: ReviewType }): JSX.Element {
  const { review } = props;

  return (
    <>
      <div className='reviews__user user'>
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img
            className='reviews__avatar user__avatar'
            src={`${review.user.avatarUrl}`}
            width='54'
            height='54'
            alt='Reviews avatar'
          />
        </div>
        <span className='reviews__user-name'>{review.user.name}</span>
      </div>
      <div className='reviews__info'>
        <div className='reviews__rating rating'>
          <div className='reviews__stars rating__stars'>
            <span style={{ width: calcRating(review.rating) }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <p className='reviews__text'>{review.comment}</p>
        <time className='reviews__time' dateTime={parseDate(review.date)}>
          {parseDate(review.date, false)}
        </time>
      </div>
    </>
  );
}
