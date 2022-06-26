import React from 'react';
import { Box } from '@mui/material';
import { ArrowButton } from './arrow.style';

function Arrow({
  style,
  onClick,
  className,
}: any) {
  return (
    <ArrowButton
      className={className}
      style={style}
      onClick={onClick}
    />
  );
}

export default Arrow;
