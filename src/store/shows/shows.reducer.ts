/* eslint-disable no-param-reassign */
import {
  GetList, SetError, SetList, SetMyList, SetSettings,
} from './shows.type';

const getList: GetList = (_state, _action) => {};

const getMyList: GetList = (_state, _action) => {};

const setMyList: SetList = (state, action) => {
  // @ts-ignore
  state.data.myList = action.payload;
};

const setList: SetMyList = (state, action) => {
  // @ts-ignore
  state.data.list = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  setList,
  setMyList,
  setSettings,
  setError,
  getList,
  getMyList,
};

export default reducers;
