import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import Collection from './Collection'
import CollectionSkeleton from '../skeletons/CollectionSkeleton'

const CollectionGrid = ({
    collections,
    loading,
    handleClick,
    xs=12,
    sm=6,
    md=4,
    lg=3,
    ...props
  }) => {

  return (
    <Grid container spacing={1}>
      { collections ?
        collections.map(collection => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={collection.id}>
          <Collection
            collection={ collection }
            handleClick={ handleClick }
          />
        </Grid>
      )) :
        [...Array(12)].map((_, i) => (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} key={i}>
          <CollectionSkeleton />
        </Grid>
      ))
    }
  </Grid>
  )
}

CollectionGrid.propTypes = {
  collections: PropTypes.array,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default CollectionGrid
