import { selectCity } from '../../store/action';
import { CityTabObjectType } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';

export default function Tabs(props: {cities: CityTabObjectType[]}): JSX.Element {
  const {cities} = props;

  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const onCityClick = (e: React.MouseEvent) => {
    const value = (e.target as HTMLElement).innerText;
    dispatch(selectCity({city: value}));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city)=> (
              <li className="locations__item" key={city.cityName}>
                <Link className={`locations__item-link tabs__item ${city.cityName === activeCity ? 'tabs__item--active' : ''}`} to={city.href} onClick={onCityClick}>
                  <span>{city.cityName}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
