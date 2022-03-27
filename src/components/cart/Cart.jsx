import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Drawer, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material'
import ShopContext from '../../context/ShopContext'
import useCheckout from '../../hooks/useCheckout'
import CartLineItems from './CartLineItems'
import CartLineItemTotals from './CartLineItemTotals'
import CheckoutButton from './CheckoutButton'
import CartApplyDiscountCode from '../discounts/CartApplyDiscountCode'

const Cart = ({
    styles,
    title='Your Shopping Bag',
    ...props
  }) => {

  const {
    cartOpen,
    toggleOpenCart
  } = useContext(ShopContext)

  const {
    checkout
  } = useCheckout()

  return(
    <Drawer
      anchor='right'
      open={ cartOpen }
      onClose={ toggleOpenCart }
      transitionDuration={150}
      sx={ sx.root  }
    >
      <Box px={2}sx={{...sx.root, ...styles }}>
        <Button
          sx={ sx.backButton  }
          onClick={toggleOpenCart}
          startIcon={ <ArrowBack /> }
        >
          Continue Shopping
        </Button>
        <Typography variant='h6' sx={ sx.title  }>
          { title }
        </Typography>
        <CartLineItems />
        <CartApplyDiscountCode />
        <CartLineItemTotals />
        <CheckoutButton />
      </Box>
    </Drawer>
  )
}

export default Cart

Cart.propTypes = {
  className: PropTypes.string
}

const sx = {
  root: {
    flexGrow: {
      sm: 1,
      md: 'auto'
    },
    width: {
      sm: '100vw',
      md: 400 
    }
  },
  backButton: {
    my: 2
  },
  title: {
    m: 0
  }
}
