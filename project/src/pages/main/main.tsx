/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState} from 'react';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Offers from '../../components/offers/offers';
import Tabs from '../../components/tabs/tabs';
import { City, CityTabObjectType, PlaceOfferObjectType, Point, Points } from '../../types/types';

export default function Main(props: {cities: CityTabObjectType[]; city: City; points: Points}): JSX.Element {
  const {cities, city, points} = props;

  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs cities={cities}/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <Offers />
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
