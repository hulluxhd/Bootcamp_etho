import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import Item from './components/Item/item';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './components/Arrow/arrow';
import { Title } from './components/Title/title.styled';
import { Props } from './shows-list.type';
import Header from '../Header/header';

export default function ShowsList({
  title,
  shows,
  autoplay,
  autoplaySpeed,
  arrows = true,
  width = '200px',
  height = '260px',
  slidesToShow = 5,
}: Props) {
  return (

    <Box margin="82px 0">
      {title && <Title>{title}</Title>}
      <Slider
        centerMode
        arrows={arrows}
        autoplay={autoplay}
        nextArrow={<Arrow />}
        prevArrow={<Arrow />}
        slidesToShow={slidesToShow}
        autoplaySpeed={autoplaySpeed}
      >
        {shows.map(({ cover, id }) => (
          <Item
            id={id}
            key={id}
            cover={cover}
            width={width}
            height={height}
          />
        ))}
      </Slider>
    </Box>
  );
}
