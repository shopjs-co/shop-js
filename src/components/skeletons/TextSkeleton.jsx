import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const TextSkeleton = ({
    styles,
    ...props
  }) => {


  return(
    <Box sx={{ ...sx.root, ...styles } }>
      <Skeleton width={'100%'} height={20} />
      <Skeleton width={'100%'} height={20} />
      <Skeleton width={'100%'} height={20} />
      <Skeleton width={'100%'} height={20} />
      <Skeleton width={'60%'} height={20} />
    </Box>
  )
}

TextSkeleton.propTypes = {
  styles: PropTypes.object,
};

export default TextSkeleton

const sx = {
  root: {},
};
