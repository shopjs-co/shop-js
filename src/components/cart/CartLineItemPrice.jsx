import React from 'react'
import PropTypes from 'prop-types'
import useCheckout from '../../hooks/useCheckout'
import { Box, Link, CircularProgress, Typography } from '@mui/material';

const CartLineItemTotals = ({
    label,
    value,
    variant='body2',
    isDiscountCode=false,
    styles,
    ...props
  }) => {

  const {
    loading,
    checkoutDiscountCodeRemove
  } = useCheckout()

  return(
    <Box
      my={1}
      display='flex'
      justifyContent='space-between'
      width='100%'
      flexDirection='row'
      sx={{ ...sx.root, ...styles }}
    >
      <Box display='flex' flexDirection='row'>
        <Typography variant='body1' color='textSecondary'>
          { label }
        </Typography>
      </Box>
        { loading ?
          <CircularProgress size={20} /> :
          <Typography variant={variant}>
            { isDiscountCode &&
              <Link
                sx={ sx.discountCode  }
                onClick={ checkoutDiscountCodeRemove }
              >
                remove
              </Link>
            }
            { value }
          </Typography>
        }
      </Box>
  )
}

CartLineItemTotals.propTypes = {
  styles: PropTypes.object,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isDiscountCode: PropTypes.bool,
  variant: PropTypes.string
};

export default CartLineItemTotals


const sx = {
  root: {},
  discountCode: {
    cursor: 'pointer',
    color: 'text.secondary',
    fontSize: 14,
    textDecoration: 'underline',
    fontWeight: 400,
    mr: 1.5
  }
}
