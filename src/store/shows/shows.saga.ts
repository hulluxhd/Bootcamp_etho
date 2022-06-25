import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { showsService } from '../../services/shows/shows';
import { List } from './shows.type';
import showsSlice from './showsSlice';

const { setSettings, setData, setError } = showsSlice.actions;

function* getList() {
  try {
    yield put(setSettings({ loading: true }));

    const response: AxiosResponse<List> = yield call(showsService().getList);

    yield put(setData({ list: response.data }));

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
