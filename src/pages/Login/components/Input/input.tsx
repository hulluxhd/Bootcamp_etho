import React from 'react';
import { Props } from './input.type';

function Input({
  name,
  type,
  placeholder,
  onChange,
}: Props) {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
