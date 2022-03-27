import React from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton } from '@mui/material';
import { Box } from '@mui/material'
import CarouselRightArrow from '../carousels/CarouselRightArrow'
import CarouselLeftArrow from '../carousels/CarouselLeftArrow'
import Image from '../images/Image'
import {
  FiberManualRecord
} from '@mui/icons-material'
import Carousel from 'react-multi-carousel'

const ImageCarousel = ({
    images,
    loading,
    onClick,
    itemWidth=500,
    itemHeight=500,
    numSkeletons=4,
    xs=12,
    sm=6,
    md=6,
    lg=6,
    ...props
  }) => {


  const CustomDot = ({ onClick, ...rest }) => {
    const {
      active,
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <IconButton sx={ sx.dotButton } onClick={() => onClick() } size="large">
        <FiberManualRecord
          sx={{ 
            ...sx.dot,
            ...(active && sx.active)
          }}
        />
      </IconButton>
    );
  };


  return (
    <Box sx={ sx.mobileCarousel }>
      { images &&
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={{
          ...responsive,
        }}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        slidesToSlide={1}
        showDots={true}
        customLeftArrow={ <CarouselLeftArrow /> }
        customRightArrow={ <CarouselRightArrow />}
        customDot={<CustomDot />}
      >
        { images.map((image,i) => (
          <Button
            sx={ sx.button  }
            onClick={() => onClick(i)}
          >
            <Image
              key={i}
              src={ image }
              width={itemWidth}
              height={itemWidth}
              layout='fill'
            />
          </Button>
        ))}
      </Carousel>
      }
    </Box> 
  )
}

ImageCarousel.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default ImageCarousel

const sx = {
  mobileCarousel: {
    width: '100%',
  },
  dotButton: {
    p: 0,
    mt: 0,
    mr: 1,
    mb: 3,
    ml: 0
  },
  dot: {
    height: 16,
    width: 16,
    opacity: 1.0,
    color: 'common.white,'
  },
  active: {
    opacity: 1.0,
    color: 'primary.main'
  },
  button: {
    p: 0
  }
}
