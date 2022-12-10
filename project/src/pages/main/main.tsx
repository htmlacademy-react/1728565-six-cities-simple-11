
import Header from '../../components/header/header';
import Offers from '../../components/offers/offers';
import Tabs from '../../components/tabs/tabs';

export default function Main(): JSX.Element {

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs />
        <Offers />
      </main>
    </div>
  );
}
