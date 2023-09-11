import { createSelector } from 'reselect';

import type { RootState } from '../../store';
import type { UsersState } from './types';

const getState: (state: RootState) => UsersState = function (state: RootState) {
  return state.Users;
};

const getUsers = createSelector(getState, state => state.users);

export { getUsers };
