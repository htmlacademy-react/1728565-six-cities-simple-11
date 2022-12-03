/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Places from '../../components/places/places';
import Tabs from '../../components/tabs/tabs';
import { City, CityTabObjectType, PlaceCardObjectType, Point, Points } from '../../types/types';

export default function Main(props: {citiesArr: CityTabObjectType[]; placesCards: PlaceCardObjectType[]; city: City; points: Points}): JSX.Element {
  const {citiesArr, placesCards, city, points} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs citiesArr={citiesArr}/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <Places placesCards={placesCards}/>
            <div className='cities__right-section'>
              <Map
                className='cities__map'
                city={city}
                points={points}
                selectedPoint={selectedPoint}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
