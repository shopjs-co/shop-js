import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material';
import Image from '../images/Image'
import { EMPTY_IMAGE_URL } from '../../utils/constants'

const Collection = ({
    styles,
    collection,
    handleClick,
    ...props
  }) => {
  

  return(
      <Box sx={ sx.root }>
        <Button
          sx={ sx.button  }
          onClick={handleClick ? () => handleClick(collection) : null}
        >
          <Image
            layout='fill'
            src={ collection?.image?.originalSrc || EMPTY_IMAGE_URL }
            alt={ collection.title }
          />
        </Button>
        <Box py={2} px={1}>
          <Typography gutterBottom variant="subtitle1" component="h2">
            { collection.title.length > 80 ?
              collection.title.slice(0,80) + '...' :
              collection.title
            }
          </Typography>
        </Box>
      </Box> 
  )
}

Collection.propTypes = {
  styles: PropTypes.object,
  handleClick: PropTypes.func,
  collection: PropTypes.object.isRequired,
};

export default Collection


const sx = {
  root: {},
  button: {
    p: 0
  },
}
