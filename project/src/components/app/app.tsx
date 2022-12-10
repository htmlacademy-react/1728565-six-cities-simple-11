import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import NotFound from '../../pages/404/404';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const isQuestionsDataLoading = useAppSelector(
    (state) => state.isQuestionsDataLoading
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isQuestionsDataLoading
  ) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer}>
          <Route index element={<NotFound />} />
          <Route
            path=':id'
            element={<Offer />}
          />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
