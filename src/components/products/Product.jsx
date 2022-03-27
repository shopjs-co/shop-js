import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Button, Box, Typography } from '@mui/material';
import Image from '../images/Image'
import EmptyImage from '../../assets/image.svg'
import { formatCurrency } from '../../utils'

const Product = ({
    styles,
    product,
    ...props
  }) => {

  const router = useRouter()

  const handleClick = () =>
    router.push(`/products/${product.handle}`)

  return(
      <Box sx={ sx.root }>
        <Button
          sx={ sx.button  }
          onClick={ handleClick }
        >
          <Image
            alt={ product.title }
            layout='fill'
            src={ product?.images?.edges[0]?.node?.src || EmptyImage }
          />
        </Button>
        <Box py={1} px={1}>
          <Typography gutterBottom variant="subtitle1" component="h2">
            { product.title.length > 80 ?
              product.title.slice(0,80) + '...' :
              product.title
            }
          </Typography>
          <Box display='flex' flexGrow={1} justifyContent='space-between'>
            <Typography gutterBottom variant="body2" color='textSecondary'>
              { product.vendor }
            </Typography>
            <Typography gutterBottom variant="body2" color='textSecondary'>
              { formatCurrency(product.priceRange.minVariantPrice?.amount) }
            </Typography>
          </Box>
        </Box>
      </Box> 
  )
}

export default Product

Product.propTypes = {
  styles: PropTypes.object,
  product: PropTypes.object.isRequired,
};

const sx = {
  root: {},
  button: {
    p: 0
  }
}
