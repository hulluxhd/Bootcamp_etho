/* eslint-disable no-param-reassign */
import {
  GetList, SetData, SetError, SetSettings,
} from './shows.type';

const getList: GetList = (_state, _action) => {};

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  setData,
  setSettings,
  setError,
  getList,
};

export default reducers;
