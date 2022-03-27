import PropTypes from 'prop-types'
import { Box, Button, ButtonGroup } from '@mui/material';
import {Add, Remove} from '@mui/icons-material'

const QuantitySelector = ({
    quantity,
    handleChange,
    small=false,
    styles,
    ...props
  }) => {

  const addQuantity = () =>  handleChange(quantity + 1)
  const removeQuantity = () =>  handleChange(quantity - 1)

  return(
    <Box sx={{ ...sx.root, ...styles } }>
      <ButtonGroup
        sx={{ 
            ...sx.buttonGroup,
            height: small ? 32 : 54  
        }}
      >
        <Button
          sx={{ 
            ...sx.button,
            height: small ? 32 : 54,
            minHeight: small ? 32 : 54        
          }}
          onClick={ removeQuantity }
        >
          <Remove sx={ sx.icon  } />
        </Button>
        <Button
          sx={ sx.button  }
          onClick={() => { return null}}
        >
          { quantity }
        </Button>
        <Button
          sx={ sx.button  }
          onClick={ addQuantity }
        >
          <Add sx={ sx.icon } />
        </Button>
        </ButtonGroup>
    </Box> 
  )
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
  small: PropTypes.bool
}

export default QuantitySelector

const sx = {
  root: {
    mr: 1,
  },
  icon: {
    fontSize: 16
  },
  buttonGroup: {    
    border: theme => `1px solid ${theme.palette.primary.light}`,
  },
  button: {    
    border: 'none'
  }
}
