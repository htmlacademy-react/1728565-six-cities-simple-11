import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortOffers } from '../../store/app-process/app-process';
import { getSort, getSortList } from '../../store/app-process/selectors';

export default function Sort(): JSX.Element {
  const sort = useAppSelector(getSort);
  const sortList = useAppSelector(getSortList);
  const dispatch = useAppDispatch();

  const [isOpened, setIsOpened] = useState(false);

  const onHoverIn = () => {
    setIsOpened(true);
  };
  const onHoverOut = () => {
    setIsOpened(false);
  };

  const onSortClick = ({ target }: React.MouseEvent) => {
    const clickedSort = (target as HTMLElement).innerText;
    if (clickedSort === sort) {
      return;
    }

    dispatch(sortOffers(clickedSort));
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        onMouseEnter={onHoverIn}
        onMouseLeave={onHoverOut}
      >
        {sort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <div
        className={`places__options-wrapper ${
          isOpened ? 'places__options-wrapper--opened' : ''
        }`}
        onMouseEnter={onHoverIn}
      >
        <ul
          className='places__options places__options--custom'
          onMouseLeave={onHoverOut}
          onClick={onSortClick}
        >
          {sortList.map((sortType) => (
            <li
              className={`places__option ${
                sortType === sort ? 'places__option--active' : ''
              }`}
              tabIndex={0}
              key={sortType}
            >
              {sortType}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
