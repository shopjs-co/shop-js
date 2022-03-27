import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@mui/material';
import { PersonOutlined } from '@mui/icons-material'
import ShopContext from '../../context/ShopContext'

const AuthButton = ({ styles, ...props }) => {

  const {
    toggleOpenAuth,
  } = useContext(ShopContext)

  return (
    <IconButton
      color='primary'
      onClick={ toggleOpenAuth }
      sx={{ ...sx.root, ...styles }}
      size="large">
      <PersonOutlined />
    </IconButton>
  );
}


AuthButton.propTypes = {
  styles: PropTypes.object,
};

export default AuthButton


const sx = {
  root: {}
}
