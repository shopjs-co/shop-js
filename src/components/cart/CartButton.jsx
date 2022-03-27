import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Badge, IconButton } from '@mui/material';
import CartIcon from './CartIcon'
import ShopContext from '../../context/ShopContext'

const CartButton = ({ styles, ...props }) => {

  const {
    lineItemTotal,
    toggleOpenCart,
  } = useContext(ShopContext)

  return (
    <IconButton
      color='primary'
      onClick={ toggleOpenCart }
     sx={{...sx.root, ...styles }}
      size="large">
      <Badge badgeContent={lineItemTotal} color='secondary'>
        <CartIcon />
      </Badge>
    </IconButton>
  );
}


CartButton.propTypes = {
  styles: PropTypes.object,
};

export default CartButton


const sx = {
  root: {}
}
