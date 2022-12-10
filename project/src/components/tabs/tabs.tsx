import { selectCity } from '../../store/action';
// import { getCitiesList } from '../../store/reducer';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';

import { City } from '../../types/city';
import { CITIES } from '../../const';

export default function Tabs(): JSX.Element {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const cities = CITIES;

  const onCityClick = (city: City) => {
    dispatch(selectCity(city));
  };

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {
            cities.map((city)=> (
              <li className='locations__item' key={city.name}>
                <Link
                  className={`locations__item-link tabs__item ${city.name === activeCity.name ? 'tabs__item--active' : ''}`}
                  to={''}
                  onClick={() => onCityClick(city)}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
