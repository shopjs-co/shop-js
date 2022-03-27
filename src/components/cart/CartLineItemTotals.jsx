import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import { formatCurrency } from 'utils'
import CartLineItemPrice from './CartLineItemPrice'
import useCheckout from '../../hooks/useCheckout'

const CartLineItemTotals = ({ styles, ...props }) => {

  const {
    checkout,
    discountCodes
  } = useCheckout()

  return(
    <Box width='100%' p={2}>
      { checkout &&
        <Box>
          <CartLineItemPrice
            label={'Subtotal'}
            value={formatCurrency(checkout.subtotalPrice)}
          />
          { discountCodes &&
            discountCodes.map((discountCode, i) => (
              <CartLineItemPrice
                key={i}
                isDiscountCode={true}
                label={`${discountCode.code}`}
                value={
                  discountCode?.amount ?
                    `-${formatCurrency(discountCode.amount)}`:
                    `-${discountCode.percentage}%`
                }
              />
          ))}
          <CartLineItemPrice
            label={'Tax'}
            value={formatCurrency(checkout.totalTax)}
          />
          <CartLineItemPrice
            label={'Total'}
            value={formatCurrency(checkout.totalPrice)}
            variant='h6'
          />
        </Box> 
      }
    </Box>
  )
}

CartLineItemTotals.propTypes = {
  styles: PropTypes.object,
};

export default CartLineItemTotals

const sx = {
  root: {},
}
