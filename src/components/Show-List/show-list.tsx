import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import { dataSelector } from '../../store/shows/show.selector';
import Item from './components/Item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './components/Arrow/arrow';
import { Title } from './components/Title/title.styled';

function ShowList() {
  const data = useSelector(dataSelector);
  const movies = data.MOVIE;
  const tvShows = data.TV_SHOWS;

  return (
    <>
      <Box m="82px 0">
        <Title>Filmes</Title>
        <Slider
          slidesToShow={5}
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {movies?.map(({ cover, id }) => (
            <Item key={id} cover={cover} id={id} />
          ))}
        </Slider>
      </Box>
      <Box m="82px 0">
        <Title>Series</Title>
        <Slider
          slidesToShow={5}
          nextArrow={<Arrow />}
          prevArrow={<Arrow />}
        >
          {tvShows?.map(({ cover, id }) => (
            <Item key={id} cover={cover} id={id} />
          ))}
        </Slider>
      </Box>
    </>
  );
}

export default ShowList;
