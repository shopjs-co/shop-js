import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
} from '@mui/material'
import Product from './Product'
import ProductSkeleton from '../skeletons/ProductSkeleton'

const ProductGrid = ({
    products,
    loading,
    handleClick,
    xs=12,
    sm=6,
    md=4,
    lg=3,
    ...props
  }) => {

  return (
    <Grid container spacing={1}>
      { products && !loading ?
        products.map(product => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={product.id}>
          <Product
            product={ product }
            handleClick={ handleClick }
          />
        </Grid>
      )) :
        [...Array(12)].map((_, i) => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={i}>
          <ProductSkeleton />
        </Grid>
      ))
    }
  </Grid>
  )
}

ProductGrid.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default ProductGrid
