import React from 'react'
import PropTypes from 'prop-types'
import { 
  Box,
  Container
} from '@mui/material';

const Footer = ({
    styles,
    logo: Logo,
    ...props
  }) => {

  return(
    <Box sx={{ ...sx.root, ...styles }}>
      <Container maxWidth='lg'>
        <img src={ Logo } />
      </Container>
    </Box> 
  )
}

Footer.propTypes = {
  styles: PropTypes.object
}

export default Footer

const sx = {
  root: {
    mt: 10,
    p: 2,
    minHeight: 50,
    borderTop: theme => `1px solid ${theme.palette.common.input}`,
    backgroundColor: 'background.paper'
  },
}
