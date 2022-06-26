import styled from 'styled-components';
import { Grid } from '@mui/material';
import netflix from '../../assets/images/netflix.png';
import netflixLogo from '../../assets/images/netflix-logo.png';

export const Wrapper = styled(Grid)`
  min-height: 100vh;
`;
export const BgImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${netflix});
  background-size: cover;
  background-repeat: no-repeat;
  filter: opacity(0.03);
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 2rem 1rem;
`;

Logo.defaultProps = {
  src: netflixLogo,
};

export const Text = styled.p`
  color: ${(props) => props.theme.palette.typography.primary};
  padding: 1rem 0;
  text-align: center;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;

  label {
    color: ${(props) => props.theme.palette.typography.primary};
    margin-top: 20px;
    letter-spacing: -1px;
    cursor: pointer;
  }

  input {
    margin-right: 8px;
  } 
`;
