import React from 'react'
import PropTypes from 'prop-types'
import { List } from '@mui/material';
import useCheckout from '../../hooks/useCheckout'
import CartLineItem from './CartLineItem';
import LineItemSkeleton from '../skeletons/LineItemSkeleton'

const CartLineItems = ({
    styles,
    ...props
  }) => {

  const {
    checkout,
  } = useCheckout()

  return(
      <List
       sx={{...sx.root, ...styles }}
        disablePadding
      >
        { checkout?.lineItems ?
          checkout.lineItems.edges.map(({ node: lineItem }, i) => (
            <CartLineItem
              lineItem={ lineItem }
              key={ lineItem.id }
            />
          )) :
          [...Array(4)].map((_, i) => (
            <LineItemSkeleton key={i} />
          ))
        }
      </List>
  )
}

CartLineItems.propTypes = {
  styles: PropTypes.object,
};

export default CartLineItems

const sx = {
  root: {},
}
