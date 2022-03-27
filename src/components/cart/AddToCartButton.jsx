import React, { useContext } from 'react'
import { useAlerts, useCheckout } from 'hooks'
import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@mui/material';
import ShopContext from '../context/ShopContext'


const AddToCartButton = ({
    styles,
    variant,
    isAvailable,
    quantity=1,
    selectOptionsRef,
    ...props
  }) => {

  const {
    showAlertSuccess,
    showAlertWarning,
    showAlertError
  } = useAlerts()

  const {
    toggleOpenCart
  } = useContext(ShopContext)

  const {
    loading,
    checkoutLineItemsAdd,
  } = useCheckout()

  const handleAddToCart = async () => {
    if(variant?.id){
      checkoutLineItemsAdd(variant?.id, quantity)
      setTimeout(() => toggleOpenCart(), 500)
    }else{
      selectOptionsRef.current.scrollIntoView({ behavior: 'smooth'})
      showAlertError("Please make a selection")
    }
  }


  return(
      <Button
        fullWidth
        color='primary'
        onClick={ handleAddToCart }
       sx={{...sx.root, ...styles }}
        variant='contained'
        size='large'
        startIcon={
          loading &&
            <CircularProgress size={20} sx={ sx.loader  } />
          }
      >
        <span sx={ sx.buttonText  }>
          Add to Bag
        </span>
      </Button>
  )
}

AddToCartButton.propTypes = {
  variant: PropTypes.object,
  quantity: PropTypes.number,
  isAvailable: PropTypes.bool,
  styles: PropTypes.object,
  selectOptionsRef: PropTypes.object
};

export default AddToCartButton

const sx = {
  root: {
    minWidth: 160,
    maxWidth: 260,
    height: 54,
  },
  buttonText: {},
  loader: {
    color: 'common.white'
  }
}
