
import Header from '../../components/header/header';
import Offers from '../../components/offers/offers';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers } from '../../store/app-process/selectors';

export default function Main(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);

  return (
    <div className={`page page--gray page--main ${!offers.length ? 'page__main--index-empty' : ''}`}>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <Offers offers={offers}/>
      </main>
    </div>
  );
}
