import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material';
import useProducts from '../../hooks/useProducts'
import ProductCarousel from './ProductCarousel'
import ProductGrid from './ProductGrid'
import { Box } from '@mui/material'

const ProductRecommendations = ({
    productId,
    variant='grid',
    styles
  }) => {

  const {
    loading,
    products,
    fetchProductRecommendations
  } = useProducts()

  useEffect(() => {
    if(productId)
      fetchProductRecommendations(productId)
  }, [productId])

  return (
    <Box 
      className={"sticky-block-el"} 
      sx={{ ...sx.root, ...styles }}
    >
      <center>
        <Typography variant='h3' sx={ sx.title  }>
          You May Also Like
        </Typography>
      </center>
      { variant == 'carousel' &&
        <ProductCarousel
          loading={ loading }
          products={ products }
        />
      }
      { variant == 'grid' &&
        <ProductGrid
          loading={ loading }
          products={ products }
        />
      }
    </Box> 
  )
}

ProductRecommendations.propTypes = {
  productId: PropTypes.string,
  variant: PropTypes.oneOf(['carousel','grid']),
  query: PropTypes.string,
  styles: PropTypes.object,
}

export default ProductRecommendations

const sx = {
  root: {},
  title: {
    m: 2
  }
}
