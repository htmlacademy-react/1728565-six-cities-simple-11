import { CityTabObjectType } from '../../types/types';

export default function Tabs(props: {citiesArr: CityTabObjectType[]}): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            props.citiesArr.map((city)=> (
              <li className="locations__item" key={city.cityName}>
                <a className="locations__item-link tabs__item" href={city.href}>
                  <span>{city.cityName}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}
