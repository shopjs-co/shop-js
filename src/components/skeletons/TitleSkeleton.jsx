import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const TitleSkeleton = ({
    styles,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles } }>
      <Skeleton>
        <Typography variant='h3' width={'100%'} />
      </Skeleton>
    </Box>
  )
}

TitleSkeleton.propTypes = {
  styles: PropTypes.object,
};

export default TitleSkeleton

const sx = {
  root: {},
};
