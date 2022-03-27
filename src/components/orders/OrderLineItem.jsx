import React from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Badge,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { formatCurrency, resizeImage } from '../../utils'


const OrderLineItem = ({
    styles,
    lineItem,
    ...props
  }) => {

  return(
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
      </ListItem>
  )
}

OrderLineItem.propTypes = {
  styles: PropTypes.object,
  lineItem: PropTypes.object.isRequired
};

export default OrderLineItem


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
