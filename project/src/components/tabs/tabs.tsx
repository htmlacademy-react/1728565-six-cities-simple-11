import { selectCity } from '../../store/action';
import { City } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';

export default function Tabs(props: {cities: City[]}): JSX.Element {
  const {cities} = props;

  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const onCityClick = (cityname: string) => {
    dispatch(selectCity({city: cityname}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city)=> (
              <li className="locations__item" key={city.title}>
                <Link
                  className={`locations__item-link tabs__item ${city.title === activeCity ? 'tabs__item--active' : ''}`}
                  to={''}
                  onClick={() => onCityClick(city.title)}
                >
                  <span>{city.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
