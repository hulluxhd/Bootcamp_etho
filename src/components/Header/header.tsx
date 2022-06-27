import {
  Avatar, Box, Grid, Menu,
} from '@mui/material';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import logo from '../../assets/images/netflix-logo.png';

function Header() {
  return (
    <Box display="flex" justifyContent="space-evenly" alignItems="center" maxHeight="150px">
      <GiHamburgerMenu cursor="pointer" fontSize="2rem" />
      <img src={logo} style={{ width: '200px', cursor: 'pointer' }} alt="netflix-logo" />
      <Avatar style={{ cursor: 'pointer' }} />
    </Box>
    /* Queria melhorar esse código mas não deu tempo :/ */
  );
}

export default Header;
