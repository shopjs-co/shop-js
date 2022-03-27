import React, {useState, useEffect} from 'react'
import { formatCurrency } from 'utils'

const useVariants = ({ product, selectedOptions }) => {

  const [variant, setVariant] = useState()
  const [variantImage, setVariantImage] = useState()
  const [productImages, setProductImages] = useState()

  const [price, setPrice] = useState()
  const [compareAtPrice, setCompareAtPrice] = useState()

  const selectVariant = () => {
    const selectedVariant = product
      .productByHandle
      .variants
      .edges.find(({ node: variant }) =>
        variant.selectedOptions.every(option => {
          return selectedOptions[option.name] == option.value
        })
    )
    setVariant(selectedVariant?.node)
  }

  const findImages = () => {
    const images = product?.productByHandle?.images?.edges.map(e => e.node)
    if(!images){
      setProductImages();
      return
    };
    let primary = images[0]
    if(variant){
      primary = images.find(image => image.id == variant?.image?.id);
      setVariantImage(primary?.src)
    }
    setProductImages([primary?.src, ...images.map(i => i.src)].filter(i => i && i))
  }

  const findPriceRange = () => {
    if(variant)
      setPrice(formatCurrency(variant.price));

    if(variant?.compareAtPrice)
      setCompareAtPrice(formatCurrency(variant.compareAtPrice));

    let { priceRange } = product.productByHandle
    let minPrice = priceRange.minVariantPrice.amount
    let maxPrice = priceRange.maxVariantPrice.amount

    if(minPrice === maxPrice){
      setPrice(formatCurrency(minPrice))
    }else{
      setPrice(`${formatCurrency(minPrice)}-${formatCurrency(maxPrice)}`)
    }
  }

  useEffect(() => {
    if(product){
      findPriceRange()
    }
    findImages()
  }, [product, variant])

  useEffect(() => {
    if(product) selectVariant();
  }, [selectedOptions])

  useEffect(() => {
  if(product && product.productByHandle.variants.edges.length == 1){
      setVariant(product.productByHandle.variants.edges[0].node)
    }
  }, [product])

  return {
    variant,
    price,
    compareAtPrice,
    variantImage,
    productImages
  }
}

export default useVariants
