import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material';
import useVariants from '../../hooks/useVariants'
import AddToCartButton from '../cart/AddToCartButton'
import TitleSkeleton from '../skeletons/TitleSkeleton'
import TextSkeleton from '../skeletons/TextSkeleton'
import QuantitySelector from '../variants/QuantitySelector'
import VariantSelector from '../variants/VariantSelector'

const ProductDetails = ({ product, ...props }) => {

  const selectOptionsRef = useRef()

  const [selectedOptions, setSelectedOptions] = useState({})
  const [quantity, setQuantity] = useState(1)

  const {
    variant,
    price,
    compareAtPrice
  } = useVariants({ product, selectedOptions })

  const handleOptionChange = (name, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [name]: value
    })
  }

  const handleQuantityChange = (qty) => {
    if(qty < 1) qty = 1;
    setQuantity(qty);
  }

  const renderProductDescriptionHtml = () => {
    return {
      __html: product?.productByHandle?.descriptionHtml
    }
  }

  useEffect(() => {
    setQuantity(1)
  }, [product])

  return (
    <Box px={4}>
      { product ?
        <Box ref={ selectOptionsRef }>
          <Typography variant='body2' color='textSecondary'>
            { product.productByHandle.vendor }
          </Typography>
          <Typography variant='h3'>
            { product.productByHandle.title }
          </Typography>
          <Box display='flex' flexDirection='column' mt={1} justifyContent='flex-start'>
            <Typography variant='subtitle1' sx={ sx.price  }>
              { price }
            </Typography>
            <Typography variant='subtitle1' sx={ sx.compareAtPrice  }>
              { compareAtPrice }
            </Typography>
          </Box>
          <VariantSelector
            handleChange={ handleOptionChange }
            selectedOptions={ selectedOptions }
            options={ product?.productByHandle?.options }
          />
        </Box> 
        :
        <Box>
          <TitleSkeleton />
        </Box> 
      }
      <Box width='100%' display='flex' sx={ sx.addToCart  }>
        <QuantitySelector
          quantity={ quantity }
          handleChange={ handleQuantityChange }
        />
        <AddToCartButton
          selectOptionsRef={ selectOptionsRef }
          variant={ variant }
          isAvailable={variant ? true : false }
          quantity={quantity}
        />
      </Box>
      <Box my={2}>
        { product ?
          <Box dangerouslySetInnerHTML={
            renderProductDescriptionHtml() 
          } /> :
          <TextSkeleton />
        }
      </Box>
    </Box>
  )
}

export default ProductDetails

const sx = {
  root: {
    backgroundColor: 'common.white'
  },
  price: {},
  compareAtPrice: {
    textDecoration: 'line-through',
    color: 'text.secondary'
  },
  addToCart: {    		
    py: 2,
    px: 0,
    bottom: 0,
    left: 0,
    width: {
      sm: '100vw',
      md: 'auto'
    },
    position: {
      sm: 'fixed',
      md: 'static'
    },
    boxShadow: {
      sm: theme => `0 0 20px ${theme.palette.background.shadow}`,
      md: 'none'
    },
    zIndex: theme => theme.zIndex.modal + 1,
    backgroundColor: {
      sm: 'common.white',
      md: ''
    }
  }
}
