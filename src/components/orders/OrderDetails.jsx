import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';
import OrderLineItem from './OrderLineItem'
import LineItemSkeleton from '../skeletons/LineItemSkeleton'
import { formatCurrency } from '../../utils'
import moment from 'moment'

const OrderDetails = ({
    styles,
    order,
    ...props
  }) => {

  const [lineItems, setLineItems] = useState()

  useEffect(() => {
    if(order){
      setLineItems(order?.lineItems?.edges.map(e => e.node))
    }
  }, [order])

  return(
      <Box sx={ sx.root }>
        { lineItems ?
          lineItems.map((lineItem, i) => (
            <OrderLineItem
              key={i}
              lineItem={ lineItem }
            />
          )) :
          [...Array(4)].map((_, i) => (
            <LineItemSkeleton key={i} />
          ))
        }
        <Box py={1} px={1}>
          <Typography gutterBottom variant="subtitle1" component="h2">
            { order?.name }
          </Typography>
          <Box display='flex' flexGrow={1} justifyContent='space-between'>
            <Typography gutterBottom variant="body2" color='textSecondary'>
              { moment(order?.processedAt).format("MM/DD/YYYY") }
            </Typography>
            <Typography gutterBottom variant="body2" color='textSecondary'>
              { formatCurrency(order?.totalPrice) }
            </Typography>
          </Box>
        </Box>
      </Box> 
  )
}

OrderDetails.propTypes = {
  styles: PropTypes.object,
  order: PropTypes.object.isRequired,
};

export default OrderDetails

const sx = {
  root: {},
  button: {
    p: 0
  }
}
