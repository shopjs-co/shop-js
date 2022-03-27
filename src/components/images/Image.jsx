import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const NextImage = ({ src, width=640, height=640, objectFit='cover', alt }) => {

  const fastlyLoader = ({ src, width, quality }) => {
    let extension = src.split('.').pop()
    let filePath = src.split(`.${extension}`)[0]
    let resizedUrl = `${filePath}_${width}x${height}.${extension}`
    return resizedUrl
  }

  return (
    <Image
      objectFit={objectFit}
      loader={fastlyLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
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
