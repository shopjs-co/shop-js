import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';
import CollectionCarousel from './CollectionCarousel'
import CollectionGrid from './CollectionGrid'
import useCollections from '../../hooks/useCollections'

const Collections = ({
    styles,
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
        />
      }
      { variant == 'grid' &&
        <CollectionGrid
          loading={loading}
          collections={ collections }
        />
      }
    </Box> 
  )
}

Collections.propTypes = {
  styles: PropTypes.object,
  variant: PropTypes.oneOf(['carousel', 'grid'])
}

export default Collections

const sx = {
  root: {},
}
