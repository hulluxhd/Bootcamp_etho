import { createSlice } from '@reduxjs/toolkit';
import reducers from './user.reducer';
import { User } from './user.type';

const initialState: User = {
  data: {},
};

const userSlice = createSlice({
  name: 'user',
  reducers,
  initialState,
});

export default userSlice;
