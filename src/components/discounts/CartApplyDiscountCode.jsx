import React, { useState } from 'react'
import {
  Button, 
  Box, 
  CircularProgress, 
  Typography, 
  Input 
} from '@mui/material';
import useCheckout from '../../hooks/useCheckout'

const CartApplyDiscountCode = ({ ...props }) => {

  const [discountCode, setDiscountCode] = useState()

  const {
    loading,
    discountCodeError,
    setDiscountCodeError,
    checkoutDiscountCodeApply,
  } = useCheckout()

  const handleSubmit = async () => {
    if(discountCode?.length > 0){
      await checkoutDiscountCodeApply(discountCode)
    }else{
      setDiscountCodeError({
        message: 'Discount code is required to apply it',
        code: 'DISCOUNT_EMPTY'
      })
    }
  }

  const handleChange = (e) =>
    setDiscountCode(e.target.value)

  const handleKeyPress = (e) => {
    if(e.nativeEvent.key == "Enter" && discountCode){
      handleSubmit()
    }
  }

  return(
    <Box>
      <Box my={1} display='flex' sx={ sx.root  }>
        <Input
          value={ discountCode }
          onChange={ handleChange }
          onKeyPress={ handleKeyPress }
          placeholder="Discount code"
          sx={ sx.input  }
          disableUnderline
          autoComplete="off"
        />
        <Button
          size='small'
          onClick={ handleSubmit }
          color='primary'
          sx={ sx.button  }
        >
          { loading ?
            <CircularProgress size={20} /> :
            `APPLY`
          }
        </Button>
      </Box>
      <Typography variant='body2' sx={ sx.errorText  }>
        { discountCodeError?.message }
      </Typography>
    </Box> 
  )
}

CartApplyDiscountCode.propTypes = {};

export default CartApplyDiscountCode

const sx = {
  root: {
    borderRadius: 8,
    backgroundColor: 'common.input'
  },
  input: {
    height: 52,
    pl: 2,
    flexGrow: 1
  },
  icon: {
    height: 20,
    width: 20,
    transition: theme => theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  rotate: {
    transform: 'rotate(90deg)'
  },
  button: {
    ml: 2
  },
  errorText: {
    m: 1,
    color: 'common.error'
  }
};
