import React from 'react';
import { Link } from 'react-router-dom';
import { Props } from './item.type';
import { Cover } from './item.style';

export default function Item({
  id,
  cover,
  width,
  height,
}: Props) {
  const to = id.toString();

  return (
    <Link to={to}>
      <Cover
        cover={cover}
        width={width}
        height={height}
      />
    </Link>
  );
}
