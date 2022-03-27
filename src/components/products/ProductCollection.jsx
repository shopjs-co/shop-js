import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useCollections from '../../hooks/useCollections'
import ProductCarousel from './ProductCarousel'
import ProductGrid from './ProductGrid'
import { Box } from '@mui/material'

const ProductCollection = ({
    collectionHandle,
    perPage=20,
    variant='carousel',
    styles
  }) => {

  const {
    loading,
    collection,
    fetchCollection,
    products
  } = useCollections()

  useEffect(() => {
    if(collectionHandle)
      fetchCollection(collectionHandle, perPage)
  }, [collectionHandle])

  return (
    <Box sx={{ ...sx.root, ...styles } }>
      { variant == 'carousel' &&
        <ProductCarousel
          title={ collection?.title }
          loading={ loading }
          products={ products }
        />
      }
      { variant == 'grid' &&
        <ProductGrid
          title={ collection?.title }
          loading={ loading }
          products={ products }
        />
      }
    </Box> 
  )
}

ProductCollection.propTypes = {
  collectionHandle: PropTypes.string.isRequired,
  products: PropTypes.array,
  variant: PropTypes.oneOf(['carousel','grid']),
  query: PropTypes.string,
  styles: PropTypes.object,
}

export default ProductCollection

const sx = {
  root: {}
}
