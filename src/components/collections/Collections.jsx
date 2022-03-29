import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';
import CollectionCarousel from './CollectionCarousel'
import CollectionGrid from './CollectionGrid'
import useCollections from '../../hooks/useCollections'

const Collections = ({
    styles,
    handleClick,
    variant='carousel',
    ...props
  }) => {

  const {
    loading,
    collections,
    fetchCollections
  } = useCollections()

  useEffect(() => {
    fetchCollections()
  }, [])

  return (
    <Box sx={ sx.root  }>
      <Typography variant='h6'>
        Collections
      </Typography>
      { variant == 'carousel' &&
        <CollectionCarousel
          loading={loading}
          collections={ collections }
          handleClick={ handleClick }
        />
      }
      { variant == 'grid' &&
        <CollectionGrid
          loading={loading}
          collections={ collections }
          handleClick={ handleClick }
        />
      }
    </Box> 
  )
}

Collections.propTypes = {
  styles: PropTypes.object,
  handleClick: PropTypes.func,
  variant: PropTypes.oneOf(['carousel', 'grid'])
}

export default Collections

const sx = {
  root: {},
}
