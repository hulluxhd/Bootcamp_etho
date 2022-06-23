import { Action } from '../store/store.type';
import { User } from './user.type';

const setData = (state: User, action: Action<any>) => {
  state.data = action.payload;
};

const reducers = {
  setData,
};

export default reducers;
