import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getDataLoadingState } from '../../store/offers-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoading = useAppSelector(getDataLoadingState);

  if (authorizationStatus === AuthorizationStatus.Unknown || isDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Offer}>
        <Route index element={<NotFound />} />
        <Route path=':id' element={<Offer />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
