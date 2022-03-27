import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import SizeSelector from './SizeSelector'
import ColorSelector from './ColorSelector'

const VariantSelector = ({
    selectedOptions,
    handleChange,
    options,
    styles,
    ...props
  }) => {


  let sizeOption = options.find(o => o.name == 'Size')
  let colorOption = options.find(o => o.name == 'Color')
  let materialOption = options.find(o => o.name == 'Material')

  return(
    <Box sx={ sx.root  }>
      <Box my={2}>
        { colorOption &&
          <ColorSelector
            selected={selectedOptions["Color"]}
            handleChange={handleChange}
            option={colorOption}
          />
        }
      </Box>
      <Box my={2}>
        {  sizeOption &&
          <SizeSelector
            selected={selectedOptions["Size"]}
            handleChange={handleChange}
            option={sizeOption}
          />
        }
      </Box>
    </Box> 
  )
}

VariantSelector.propTypes = {
  selectedOptions: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  variant: PropTypes.object,
  options: PropTypes.array,
  className: PropTypes.string
}

export default VariantSelector

const sx = {
  root: {}
}
