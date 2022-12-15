import { CITIES, CITY, SORT_LIST } from '../../const';
import { gerenateCity } from '../../mocks/mocks';
import { AppProcess } from '../../types/state';
import { appProcess, selectCity, setError, sortOffers } from './app-process';

describe('Reducer: appProcess', () => {
  let state: AppProcess;
  const newCity = gerenateCity();
  const newSort = 'Price: low to high';
  const newError = 'error';

  beforeEach(() => {
    state = {
      city: CITY,
      cities: CITIES,
      sort: 'Popular',
      sortList: SORT_LIST,
      error: null,
    };
  });

  it('should return initial state', () => {
    expect(appProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  it('should change city and update state', () => {
    expect(appProcess.reducer(state, selectCity(newCity))).toEqual({...state, city: newCity });
  });

  it('should change sort type and update state', () => {
    expect(appProcess.reducer(state, sortOffers(newSort))).toEqual({...state, sort: newSort });
  });

  it('should set error and update state', () => {
    expect(appProcess.reducer(state, setError(newError))).toEqual({...state, error: newError });
  });
});
