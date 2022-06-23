/* eslint-disable no-param-reassign */
import { PayloadAction } from '@reduxjs/toolkit';
import { Action } from '../store/store.type';
import { User } from './user.type';
import { AuthPayload } from '../../services/user/user.type';

const authentication = (_state: User, _action: PayloadAction<AuthPayload>) => {};

const setData = (state: User, action: Action<any>) => {
  state.data = action.payload;
};

const setError = (state: User, action: PayloadAction<User['error']>) => {
  state.error = action.payload;
};

const reducers = {
  setData,
  setError,
  authentication,
};

export default reducers;
