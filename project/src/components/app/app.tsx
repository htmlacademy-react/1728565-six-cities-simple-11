import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { City, OfferObjectType } from '../../types/types';
import { AppRoute } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';


function App(props: {cities: City[]; offers: OfferObjectType[]; nearOffers: OfferObjectType[]}): JSX.Element {
  const {cities, offers, nearOffers } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Main
              cities={cities}
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
              offer={offers[0]}
              nearOffers={nearOffers}
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
