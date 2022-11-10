import Header from '../../pages/header/header';
import Tabs from '../../pages/tabs/tabs';
import Places from '../../pages/places/places';
import Map from '../../pages/map/map';

type CityTabObjectType = {cityName: string; href: string};
type PlaceObjectType = {
  id: number;
  placeMark?: string;
  photo: string;
  price: string;
  rating: string;
  info: string;
  placeType: string;
  placeLink?: string;
};

function App(props: {citiesArr: CityTabObjectType[]; placesArr: PlaceObjectType[]}): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs citiesArr={props.citiesArr}/>
        <div className="cities">
          <div className="cities__places-container container">
            <Places placesArr={props.placesArr}/>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
