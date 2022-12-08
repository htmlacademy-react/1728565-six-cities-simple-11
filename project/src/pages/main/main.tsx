/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Header from '../../components/header/header';
import Offers from '../../components/offers/offers';
import Tabs from '../../components/tabs/tabs';
import { useAppSelector } from '../../hooks';
import {
  City,
} from '../../types/types';

export default function Main(props: {
  cities: City[];
}): JSX.Element {
  const { cities } = props;

  return (
    <div className='page page--gray page--main'>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <Tabs cities={cities} />
        <Offers />
      </main>
    </div>
  );
}
