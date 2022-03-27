import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Box, Button, Typography } from '@mui/material';
import Image from '../images/Image'

const Collection = ({
    styles,
    collection,
    ...props
  }) => {

  const router = useRouter()

  const handleClick = () =>
    router.push(`/collections/${collection.handle}`)

  return(
      <Box sx={ sx.root }>
        <Button
          sx={ sx.button  }
          onClick={ handleClick }
        >
          <Image
            layout='fill'
            src={ collection?.image?.originalSrc }
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
  collection: PropTypes.object.isRequired,
};

export default Collection


const sx = {
  root: {},
  button: {
    p: 0
  },
}
