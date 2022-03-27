import React from 'react'
import useResponsive from '../../hooks/useResponsive'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import CarouselRightArrow from '../carousels/CarouselRightArrow'
import CarouselLeftArrow from '../carousels/CarouselLeftArrow'
import Product from './Product'
import ProductSkeleton from '../skeletons/ProductSkeleton'
import Carousel from 'react-multi-carousel'
import { responsive } from '../../shop-config'

const ProductCarousel = ({
    products,
    swipeable=true,
    draggable=true,
    autoPlay=false,
    showDots=false,
    styles
  }) => {

  const { itemsPerCarousel } = useResponsive()

  return (
    <Box sx={{ ...sx.root, ...styles } }>
      { products ?
        <Carousel
          swipeable={swipeable}
          draggable={draggable}
          showDots={showDots}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={autoPlay}
          keyBoardControl={true}
          customLeftArrow={ <CarouselLeftArrow /> }
          customRightArrow={ <CarouselRightArrow />}
          slidesToSlide={itemsPerCarousel}
        >
          { products.map((product) => (
            <Product
              key={product.id}
              product={ product }
            />
          ))}
        </Carousel>
      :
        <Box display='flex' justifyContent='space-between' flexDirection='row'>
          { [...Array(itemsPerCarousel)].map((_, i) => (
            <ProductSkeleton
              key={i}
              sx={ sx.item  }
            />
          ))}
        </Box>
      }
    </Box> 
  )
}

ProductCarousel.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  styles: PropTypes.object,
  swipeable: PropTypes.bool,
  draggable: PropTypes.bool,
  autoPlay: PropTypes.bool,
  showDots: PropTypes.bool
}

export default ProductCarousel

const sx = {
  root: {},
  carousel: {
    width: '100%'
  },
  item: {
    p: {
      xs: 'auto',
      sm: 1
    }
  },
}
