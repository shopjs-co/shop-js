import React from 'react'
import PropTypes from 'prop-types'
import useCheckout from '../../hooks/useCheckout'
import {
  Avatar,
  Badge,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,
} from '@mui/material';
import LineItemSkeleton from '../skeletons/LineItemSkeleton'
import { formatCurrency, resizeImage } from 'utils'
import { Close } from '@mui/icons-material'

const CartLineItem = ({
    styles,
    lineItem,
    ...props
  }) => {

  const {
    loading,
    checkoutLineItemsRemove
  } = useCheckout()

  return(
    loading ?
      <LineItemSkeleton /> :
      <ListItem button disableGutters>
        <ListItemIcon sx={ sx.thumbnail  }>
          <Badge badgeContent={lineItem.quantity} color='secondary'>
            <Avatar
              sx={ sx.avatar  }
              variant='square'
              src={ resizeImage(lineItem?.variant?.image?.src, 100, 100) }
            />
          </Badge>
        </ListItemIcon>
        <ListItemText
          primary={ lineItem.title }
          secondary={
            <span>
              <Typography variant='body2'>
                { lineItem?.variant?.title }
              </Typography>
              <Typography variant='body2'>
                { formatCurrency(lineItem?.variant?.price ) }
              </Typography>
            </span>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            size='small'
            onClick={() => checkoutLineItemsRemove(lineItem?.id) }
          >
            <Close
              sx={ sx.removeIcon  }
            />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  )
}

CartLineItem.propTypes = {
  styles: PropTypes.object,
  lineItem: PropTypes.object.isRequired
};

export default CartLineItem


const sx = {
  root: {},
  thumbnail: {
    mr: 2,
  },
  avatar: {
    height: 100,
    width: 100,
  },
  thumbnail: {
    mr: 2
  },
  lineItem: {},
  loader: {},
  removeIcon: {
    fontSize: 20,
    color: 'text.secondary'
  }
}
