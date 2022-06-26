import styled from 'styled-components';
import { TextProps } from './title.type';

export const Title = styled.p<TextProps>`
  font-size: 24px;
  font-weight: ${(props) => props.fontWeight};
  color: #fff;
  margin: 15px 0;
`;
