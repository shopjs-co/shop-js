import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import SearchInput from './SearchInput'
import { Box } from '@mui/material'

const Search = ({ styles, ...props }) => {

  const router = useRouter()

  const [query, setQuery] = useState('')

  const handleChange = (ev) =>
    setQuery(ev.target.value);

  const handleSearch = () =>
    router.push(`/search/${query.split(' ').join('-')}`);

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
