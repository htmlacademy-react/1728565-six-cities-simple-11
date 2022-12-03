import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { City, CityTabObjectType, PlaceCardObjectType, PlaceOfferObjectType, Points } from '../../types/types';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';


function App(props: {citiesArr: CityTabObjectType[]; placesCards: PlaceCardObjectType[]; placeOffer: PlaceOfferObjectType; nearPlacesCards: PlaceCardObjectType[]; city: City; points: Points}): JSX.Element {
  const {citiesArr, placesCards, placeOffer, nearPlacesCards, city, points} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              citiesArr={citiesArr}
              placesCards={placesCards}
              city={city}
              points={points}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Offer}>
          <Route index element={<NotFound />} />
          <Route path=':id' element={
            <Offer
              placeOffer={placeOffer}
              nearPlacesCards={nearPlacesCards}
              city={city}
              points={points}
            />
          }
          />
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
