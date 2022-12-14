import { AuthorizationStatus } from '../../const';
import { generateEmail } from '../../mocks/mocks';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { setUserCredentials, userProcess } from './user-process';

describe('Reducer: userProcess', () => {
  let state: UserProcess;
  const newEmail = generateEmail();

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: null,
    };
  });

  it('should return initial state', () => {
    expect(userProcess.reducer(undefined, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  it('should update Auth status to AUTH on successful check', () => {
    expect(
      userProcess.reducer(state, { type: checkAuthAction.fulfilled.type })
    ).toEqual({ ...state, authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update Auth status to NO AUTH on failed check', () => {
    expect(
      userProcess.reducer(state, { type: checkAuthAction.rejected.type })
    ).toEqual({ ...state, authorizationStatus: AuthorizationStatus.NoAuth});
  });

  it('should update Auth status to AUTH on successful login', () => {
    expect(
      userProcess.reducer(state, { type: loginAction.fulfilled.type })
    ).toEqual({ ...state, authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should update Auth status to NO AUTH on failed login', () => {
    expect(
      userProcess.reducer(state, { type: loginAction.rejected.type })
    ).toEqual({ ...state, authorizationStatus: AuthorizationStatus.NoAuth});
  });

  it('should update Auth status to NO AUTH on logout', () => {
    expect(
      userProcess.reducer(state, { type: logoutAction.fulfilled.type })
    ).toEqual({ ...state, authorizationStatus: AuthorizationStatus.NoAuth});
  });

  it('should change user email and update state', () => {
    expect(userProcess.reducer(state, setUserCredentials(newEmail))).toEqual({...state, userEmail: newEmail });
  });
});
