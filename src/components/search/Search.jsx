import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import { Box } from '@mui/material'

const Search = ({ 
  styles, 
  handleSearch,
  ...props 
}) => {

  const [query, setQuery] = useState('')

  const handleChange = (ev) =>
    setQuery(ev.target.value);


  const handleClear = () => setQuery('')

  const handleKeyPress = (e) => {
    if(e.nativeEvent.key == "Enter" && query){
      handleSearch()
    }
  }

  return(
    <Box sx={{ ...sx.root, ...styles }}>
      <SearchInput
        value={ query }
        handleClear={handleClear}
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
      />
    </Box> 
  )
}

Search.propTypes = {
  className: PropTypes.string
}

export default Search

const sx = {
  root: {}
}
