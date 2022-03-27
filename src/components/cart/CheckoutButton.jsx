import React, { useState } from 'react'
import useCheckout from '../../hooks/useCheckout'
import PropTypes from 'prop-types'
import { Box, Button, CircularProgress } from '@mui/material';
import { ChevronRight } from '@mui/icons-material'
import CartIcon from './CartIcon'

const CheckoutButton = ({
    styles,
    ...props
  }) => {

  const [loading, setLoading] = useState(false)
  const {
    checkout
  } = useCheckout()


  const handleCheckoutClick = () => {
    setLoading(true)
    setTimeout(() => redirectToWebUrl(), 500)
  }

  const redirectToWebUrl = () => {
    window.location = checkout.webUrl
    setLoading(false)
  }

  return(
    <Box sx={ sx.root }>
      <Box sx={ sx.responsiveButton }>
        <Button
          fullWidth
          color='primary'
          onClick={ handleCheckoutClick }
          variant='contained'
          size='large'
          sx={ sx.button }
          startIcon={
            <CartIcon />
          }
          endIcon={
            loading ?
              <CircularProgress size={20} sx={ sx.loader  } /> :
              <ChevronRight />
            }
        >
          Checkout
        </Button>
      </Box> 
    </Box> 
  )
}

CheckoutButton.propTypes = {
  variant: PropTypes.object,
  quantity: PropTypes.number,
  isAvailable: PropTypes.bool,
  className: PropTypes.string
};

export default CheckoutButton

const sx = {
  root: {
    height: {
      sm: theme => theme.spacing(10),
      md: 'auto'
    }
  },
  responsiveButton: {
    p: 2,
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: {
      sm: 'common.white',
      md: ''
    },
    position: {
      sm: 'fixed',
      md: 'relative'
    },
    boxShadow: {
      sm: theme =>  `0 0 20px ${theme.palette.background.shadow}`,
      md: 'none'
    }
  },
  button: {
    height: 64,
    borderRadius: 8,
  },
  buttonText: {
    ml: 3
  },
  loader: {
    color: 'common.white'
  }
}
