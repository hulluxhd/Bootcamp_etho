import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import showsSlice from '../../store/shows/showsSlice';
import ShowsList from '../../components/Show-List/show-list';
import { listSelector, myListSelector } from '../../store/shows/show.selector';
import Header from '../../components/Header/header';
// import Header from '../../components/header/header';

export default function Shows() {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = list.MOVIE;
  const tvShows = list.TV_SHOWS;

  useEffect(
    () => {
      dispatch(showsSlice.actions.getList());
      dispatch(showsSlice.actions.getMyList());
    },
    [],
  );

  useEffect(() => {
    console.log(list, myList);
  }, [list, myList]);

  return (
    <Container>
      <Header />
      <ShowsList
        autoplay
        width="95%"
        height="560px"
        arrows={false}
        shows={myList}
        slidesToShow={1}
        autoplaySpeed={2400}
      />
      <ShowsList shows={myList} title="Minha Lista" />
      { movies && <ShowsList shows={movies} title="Filmes" /> }
      { tvShows && <ShowsList shows={tvShows} title="Séries" /> }
    </Container>
  );
}
