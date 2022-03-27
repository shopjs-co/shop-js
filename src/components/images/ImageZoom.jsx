import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import ImgsViewer from 'react-images-viewer'

const ImageZoom = ({
    open,
    onClose,
    images,
    currentImage=0,
    styles,
    ...rest
  }) => {


  const [currentImg, setCurrentImg] = useState(currentImage)

  const onClickNext = () => setCurrentImg(currentImg+1)
  const onClickPrev = () => setCurrentImg(currentImg-1)

  useEffect(() => {
    setCurrentImg(currentImage)
  }, [currentImage])

  return (
    <Box sx={{ ...sx.root, ...styles } }>
      { images &&
        <ImgsViewer
          imgs={images.map(m => ({src: m}))}
          isOpen={open}
          currImg={ currentImg }
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          onClose={onClose}
        />
      }
    </Box> 
  )
}

ImageZoom.propTypes = {
  open: PropTypes.bool.isRequired,
  images: PropTypes.array,
  currentImage: PropTypes.number,
  className: PropTypes.string
}

export default ImageZoom

const sx = {
  root: {}
}
