import React from 'react'
import PropTypes from 'prop-types'
import { 
  AppBar, 
  Box, 
  Button, 
  Hidden, 
  IconButton, 
  Toolbar 
} from '@mui/material';
import {
  Menu,
  StoreOutlined
} from '@mui/icons-material'
import AuthButton from './auth/AuthButton' 
import CartButton from './cart/CartButton'
import Search from './search/Search'

const Header = ({ styles, handleClick, logo: Logo, ...props }) => {  

  return (
    <Box sx={{...sx.root, ...styles }}>
      <AppBar color='inherit' position='static' elevation={0}>
        <Toolbar>
          <Hidden smUp>
            <IconButton color='primary' edge='start' size="large">
              <Menu />
            </IconButton>
          </Hidden>
          <Box sx={ sx.container  }>
            <Button>
              <img
                src={ Logo }
                style={ sx.logo }
              />
            </Button>
          </Box> 
          <Hidden lgDown>
            <Search />
          </Hidden>
          <IconButton
            color='primary'
            onClick={() => handleClick('/')}
            sx={ sx.menuButton  }
            size="large">
            <StoreOutlined />
          </IconButton>
          <AuthButton />
          <CartButton />
        </Toolbar>
      </AppBar>
    </Box> 
  );
}

export default Header

Header.propTypes = {
  className: PropTypes.string
}

const sx = {
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1,
  },
  logo: {
    width: 110,
  },
}
