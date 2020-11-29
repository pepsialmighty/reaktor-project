import React, { useState } from 'react';
import { Button, Menu, MenuItem, Box } from '@material-ui/core';
import './LandingPage.scss';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div className='landingPage'>
      <Box
        className='box'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button variant='outlined' color='primary' onClick={onOpenMenu}>
          Categories
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onCloseMenu}
        >
          <Link className='link' to='/jackets'>
            <MenuItem>Jackets</MenuItem>
          </Link>
          <Link className='link' to='/shirts'>
            <MenuItem>Shirts</MenuItem>
          </Link>
          <Link className='link' to='/accessories'>
            <MenuItem>Accessories</MenuItem>
          </Link>
        </Menu>
      </Box>
      <div className='footer'>
        <span>© Copyright 2020 Nguyen Nguyen</span>
      </div>
    </div>
  );
};

export default LandingPage;
