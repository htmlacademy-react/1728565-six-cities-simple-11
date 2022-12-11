import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserEmail } from '../../store/user-process/selectors';


import Logo from '../logo/logo';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userEmail = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            <ul className='header__nav-list'>
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className='header__nav-item user'>
                    <div className='header__nav-profile'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'></div>
                      <span className='header__user-name user__name'>
                        {userEmail}
                      </span>
                    </div>
                  </li>
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to='#' onClick={onLogout}>
                      <span className='header__signout'>Sign out</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li className='header__nav-item'>
                  <Link className='header__nav-link' to={AppRoute.Login}>
                    <span className='header__signout'>Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
