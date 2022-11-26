import Header from '../../components/header/header';
import Map from '../../components/map/map';
import Places from '../../components/places/places';
import Tabs from '../../components/tabs/tabs';
import { CityTabObjectType, PlaceObjectType } from '../../types/types';

export default function Main(props: {citiesArr: CityTabObjectType[]; placesArr: PlaceObjectType[]}): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs citiesArr={props.citiesArr}/>
        <div className='cities'>
          <div className='cities__places-container container'>
            <Places placesArr={props.placesArr}/>
            <div className='cities__right-section'>
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
