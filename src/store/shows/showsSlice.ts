import { createSlice } from '@reduxjs/toolkit';
import reducers from '../../store/shows/shows.reducer';

const initialState = {
  data: {
    myList: [],
    list: {},
  },
  settings: {
    loading: false,
  },
  error: '',

};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

export default showsSlice;
