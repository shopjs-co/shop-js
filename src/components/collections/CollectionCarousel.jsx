import React from 'react'
import PropTypes from 'prop-types'
import useResponsive from '../../hooks/useResponsive'
import { Box  } from '@mui/material';
import CarouselRightArrow from '../carousels/CarouselRightArrow'
import CarouselLeftArrow from '../carousels/CarouselLeftArrow'
import Collection from './Collection'
import CollectionSkeleton from '../skeletons/CollectionSkeleton'
import Carousel from 'react-multi-carousel'

const CollectionCarousel = ({
    collections,
    loading,
    handleClick,
    autoPlay=false,
    swipeable=false,
    draggable=false,
    showDots=false,
    perPage=20,
    ...props
  }) => {

  const { responsive, itemsPerCarousel } = useResponsive()


  return (
    <Box sx={ sx.root  }>
      { collections ?
        <Carousel
          swipeable={swipeable}
          draggable={draggable}
          showDots={showDots}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={autoPlay}
          keyBoardControl={true}
          transitionDuration={500}
          slidesToSlide={itemsPerCarousel}
          itemClass={'carousel-item'}
          customLeftArrow={<CarouselLeftArrow />}
          customRightArrow={<CarouselRightArrow />}
        >
          { collections.map(collection => (
            <Collection
              key={collection.id}
              collection={ collection }
              handleClick={ handleClick }
            />
          ))}
        </Carousel> :
        <Box display='flex' justifyContent='space-between' flexDirection='row'>
          {[...Array(itemsPerCarousel)].map((_, i) => (
            <CollectionSkeleton
              key={i}
              sx={ sx.item  }
            />
          ))}
        </Box>
      }
    </Box> 
  )
}

CollectionCarousel.propTypes = {
  collections: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  styles: PropTypes.object,
  autoPlay: PropTypes.bool,
  swipeable: PropTypes.bool,
  draggable: PropTypes.bool,
  showDots: PropTypes.bool
}

export default CollectionCarousel

const sx = {
  root: {}
}
