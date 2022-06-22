import React from 'react';
import { Error } from './form-error.styled';
import { Props } from './form-error.type';

function FormError({ description }: Props) {
  return (
    <Error>{description}</Error>
  );
}

export default FormError;
