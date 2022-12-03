import { ReviewObjectType } from '../../types/types';
import Review from '../review/review';
import UserReviewForm from '../userReviewForm/userReviewForm';

export default function Reviews(props: {reviewsArr: ReviewObjectType[]}): JSX.Element {
  const reviewsArr = props.reviewsArr;
  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviewsArr.length}</span></h2>
      <ul className='reviews__list'>
        {
          reviewsArr.map((review) => (
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
