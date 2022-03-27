import React from 'react'
import PropTypes from 'prop-types'
import { Box, Avatar } from '@mui/material';

import Skeleton from '@mui/material/Skeleton';


const LineItemSkeleton = ({
    styles,
    ...props
  }) => {


  return (
    <Box my={1} display='flex' flexDirection='row' width='100%'>
      <Skeleton variant="rectangular">
        <Avatar variant='square' sx={ sx.avatar  } />
      </Skeleton>
      <Box mx={1} height='180' width={'100%'} justifyContent='flex-start'>
        <Box mb={1}><Skeleton variant="rectangular" width='80%' /></Box>
        <Box mb={1}><Skeleton variant="rectangular" width='30%' height={14} /></Box>
        <Box mb={1}><Skeleton variant="rectangular" width='30%' height={14} /></Box>
      </Box>
    </Box>
  );
}

LineItemSkeleton.propTypes = {
  styles: PropTypes.object,
};

export default LineItemSkeleton


const sx = {
  root: {},
  avatar: {
    height: 100,
    width: 100
  },
  thumbnail: {
    mr: 2
  }
};
