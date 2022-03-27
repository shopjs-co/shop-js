import React from 'react'
import PropTypes from 'prop-types'
import { resizeImage } from '../../utls'

const ResponsiveImage = ({ src, alt, ...rest }) => {
  return (
    <img src={resizeImage(src)}  alt={alt}  style={ styles.image } { ...rest } />
  )
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
}

export default ResponsiveImage

const styles = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover'
}