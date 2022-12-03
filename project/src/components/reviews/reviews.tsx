import { ReviewObjectType } from '../../types/types';
import Review from '../review/review';
import UserReviewForm from '../userReviewForm/userReviewForm';

export default function Reviews(props: {reviews: ReviewObjectType[]}): JSX.Element {
  const {reviews} = props;

  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
      <ul className='reviews__list'>
        {
          reviews.map((review) => (
            <li className='reviews__item' key=''>
              <Review review={review}/>
            </li>
          ))
        }
      </ul>
      <UserReviewForm />
    </section>
  );
}
