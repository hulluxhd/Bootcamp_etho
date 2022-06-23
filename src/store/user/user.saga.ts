import { call, put } from 'redux-saga/effects';
import userService from '../../services/user/user';
import { AuthPayload, AuthResponse } from '../../services/user/user.type';
import userSlice from './user.slice';

function* authenticate(action: AuthPayload) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
  } catch (exception) {

  }
}
