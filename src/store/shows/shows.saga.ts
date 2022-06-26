import { AxiosResponse } from 'axios';
import {
  call, put, takeLatest, select, cancel,
} from 'redux-saga/effects';
import { showsService } from '../../services/shows/shows';
import { Show } from '../../store/shows/shows.type';
import { List } from './shows.type';
import showsSlice from './showsSlice';
import { Data as UserData } from '../user/user.type';
import { tokenSelector } from '../user/user.selector';

const { setSettings, setData, setError } = showsSlice.actions;

function* getList() {
  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(setError('User token not found'));
    yield cancel();
  }

  try {
    yield put(setSettings({ loading: true }));

    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getList,
    );

    const showsList = response.data.reduce((acc, show: Show) => {
      // @ts-ignore
      const categoryKey = acc[show.category] || [];
      return {
        ...acc,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(setData({ ...showsList }));

    yield put(setError(''));
  } catch (exception) {
    yield put(setError('Error'));
  } finally {
    yield put(setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
];

export default showsSaga;
