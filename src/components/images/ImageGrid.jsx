import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@mui/material';
import Image from '../images/Image'
import ImageSkeleton from '../skeletons/ImageSkeleton'


const ImageGrid = ({
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


  return (
    <Grid container spacing={1}>
      { images ?
        images.map((image, i) => (
        <Grid
          item
          key={i}
          xs={i == 0 ? 12: xs}
          sm={i == 0 ? 12: sm}
          md={i == 0 ? 12: md}
          lg={i == 0 ? 12: lg}
        >
          <Button sx={ sx.button } onClick={() => onClick(i) }>
            <Image
              src={ image }
              width={i == 0 ? itemWidth * 2 : itemWidth}
              height={i == 0 ? itemWidth * 2 : itemWidth}
            />
          </Button>
        </Grid>
      )) :
        [...Array(numSkeletons)].map((_, i) => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={i}>
          <ImageSkeleton />
        </Grid>
      ))
    }
  </Grid>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.array,
  loading: PropTypes.bool,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default ImageGrid

const sx = {
  button: {
    p: 0
  }
}
