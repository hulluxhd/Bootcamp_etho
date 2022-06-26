import React from 'react';
import { Link } from 'react-router-dom';
import { Cover } from './item.style';
import { Props } from './item.type';

export default function Item({ cover, id }: Props) {
  return (
    <Link to={id.toString()}>
      <Cover cover={cover} />
    </Link>
  );
}
