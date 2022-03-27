import React from 'react'
import PropTypes from 'prop-types'

const NextImage = ({ src, width=640, height=640, objectFit='cover', alt }) => {

  const fastlyLoader = ({ src, width, quality }) => {
    let extension = src.split('.').pop()
    let filePath = src.split(`.${extension}`)[0]
    let resizedUrl = `${filePath}_${width}x${height}.${extension}`
    return resizedUrl
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{
        objectFit: objectFit
      }}
    />
  )
}

NextImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  objectFit: PropTypes.string
}

export default NextImage
