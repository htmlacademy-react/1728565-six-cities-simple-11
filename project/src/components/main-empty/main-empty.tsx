import { City } from '../../types/city';
import './main-empty.css';

export default function MainEmpty(props: {city: City}): JSX.Element {
  const { city } = props;
  return (
    <section className='cities__no-places'>
      <div className='cities__status-wrapper tabs__content'>
        <b className='cities__status'>No places to stay available</b>
        <p className='cities__status-description'>
          We could not find any property available at the moment in
          {city.name}
        </p>
      </div>
    </section>
  );
}
