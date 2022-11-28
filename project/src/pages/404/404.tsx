import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';

export default function NotFound(): JSX.Element {
  return (
    <div className='page page--gray page--404'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo />
            </div>
          </div>
        </div>
      </header>
      <div className='page__main page__main--404'>
        <div className='page-error'>
          <div className='page-error__container container'>
            <h1 className='page-error__title'>Error 404</h1>
            <p className='page-error__text'>
               Page not found
            </p>
            <Link className='page-error__link' to='/'>
              Return to the main page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
