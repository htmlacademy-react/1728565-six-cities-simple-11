import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { CityTabObjectType, PlaceCardObjectType, PlaceOfferObjectType } from '../../types/types';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';


function App(props: {citiesArr: CityTabObjectType[]; placesCards: PlaceCardObjectType[]; placeOffer: PlaceOfferObjectType; nearPlacesCards: PlaceCardObjectType[]}): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              citiesArr={props.citiesArr}
              placesCards={props.placesCards}
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
              placeOffer={props.placeOffer}
              nearPlacesCards={props.nearPlacesCards}
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
