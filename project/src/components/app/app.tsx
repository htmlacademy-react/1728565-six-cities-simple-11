import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CityTabObjectType, PlaceObjectType} from '../../types/types';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';


function App(props: {citiesArr: CityTabObjectType[]; placesArr: PlaceObjectType[]; nearPlacesArr: PlaceObjectType[]}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main citiesArr={props.citiesArr} placesArr={props.placesArr}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Offer}>
          <Route index element={<NotFound />} />
          <Route path=':id' element={<Offer nearPlacesArr={props.nearPlacesArr}/>} />
        </Route>
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
