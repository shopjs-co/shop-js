import { useState } from 'react'
import PropTypes from 'prop-types'
import useResponsive from '../../hooks/useResponsive'
import ImageCarousel from '../images/ImageCarousel'
import ImageGrid from '../images/ImageGrid'
import ImageZoom from '../images/ImageZoom'
import { Box } from '@mui/material'

const ProductImages = ({
    images,
    ...props
  }) => {

  const {
    isMobile,
    itemWidth,
  } = useResponsive()

  const [open, setOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const handleClose = () => setOpen(false)

  const handleClick = (index) => {
    setCurrentImage(index)
    setOpen(true)
  }

  return (
    <Box>
      <ImageZoom
        images={images}
        open={open}
        onClose={ handleClose }
        currentImage={currentImage}
      />
      { isMobile ?
        <ImageCarousel
          images={images}
          itemHeight={itemWidth}
          itemWidth={itemWidth}
          onClick={ handleClick }
        /> :
        <ImageGrid
          images={images}
          onClick={ handleClick }
          itemHeight={itemWidth}
          itemWidth={itemWidth}
          numSkeletons={4}
        />
      }
    </Box> 
  )
}

ProductImages.propTypes = {
  images: PropTypes.array
}

export default ProductImages

const sx = {
  root: {},
}
