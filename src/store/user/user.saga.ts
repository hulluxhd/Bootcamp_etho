import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import userService from '../../services/user/user';
import { ErrorMessageEnum, AuthPayload, AuthResponse } from '../../services/user/user.type';
import userSlice, { initialState } from './user.slice';
import { USER_TOKEN_COOKIE } from './user.type';

function* authenticate(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));

    yield put(userSlice.actions.setError(initialState.error));

    localStorage.setItem(USER_TOKEN_COOKIE, response.data.token);
  } catch (exception) {
    // @ts-ignore
    const { response: { data } } = exception as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data?.message]));
  }
}

const userSaga = [
  takeLatest('user/authentication', authenticate),
];

export default userSaga;
