/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { PlaceOfferObjectType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

export default function Offers(): JSX.Element {
  const [activeCard, setActiveCard] = useState(0);

  const returnActiveCard = (id: number): void => {
    setActiveCard(id);
  };

  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.filteredOffers);

  return (
    <section className='cities__places places'>
      <h2 className='visually-hidden'>Places</h2>
      <b className='places__found'>312 places to stay in {city}</b>
      <form className='places__sorting' action='#' method='get'>
        <span className='places__sorting-caption'>Sort by</span>
        <span className='places__sorting-type' tabIndex={0}>
          Popular
          <svg className='places__sorting-arrow' width='7' height='4'>
            <use xlinkHref='#icon-arrow-select'></use>
          </svg>
        </span>
        <ul className='places__options places__options--custom places__options--opened'>
          <li className='places__option places__option--active' tabIndex={0}>Popular</li>
          <li className='places__option' tabIndex={0}>Price: low to high</li>
          <li className='places__option' tabIndex={0}>Price: high to low</li>
          <li className='places__option' tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className='cities__places-list places__list tabs__content'>
        {
          offers.map((offer) => (
            <PlaceCard
              className='cities__card'
              offer={offer} key={`offercard-${offer.id}`}
              returnActiveCard={returnActiveCard}
            />))
        }
      </div>
    </section>
  );
}
