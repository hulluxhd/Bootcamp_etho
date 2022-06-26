import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ShowList from '../../components/Show-List/show-list';
import { dataSelector } from '../../store/shows/show.selector';
import showsSlice from '../../store/shows/showsSlice';

function ShowsList() {
  const data = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showsSlice.actions.getList());
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <ShowList />
    </Container>
  );
}

export default ShowsList;
