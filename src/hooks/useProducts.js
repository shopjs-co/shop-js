import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  QUERY_PRODUCT,
  QUERY_PRODUCTS,
  QUERY_PRODUCT_RECOMMENDATIONS
} from 'graphql/products'

const useProducts = () => {

  const [loading, setLoading] = useState()
  const [error, setError] = useState()
  const [images, setImages] = useState()
  const [product, setProduct] = useState()
  const [products, setProducts] = useState()

  const [
    fetchProductQuery,
    fetchProductResp
  ] = useLazyQuery(QUERY_PRODUCT)

  const [
    fetchProductsQuery,
    fetchProductsResp
  ] = useLazyQuery(QUERY_PRODUCTS)

  const [
    fetchProductRecommendationsQuery,
    fetchProductRecommendationsResp
  ] = useLazyQuery(QUERY_PRODUCT_RECOMMENDATIONS)

  const fetchProduct = (handle) => {
    fetchProductQuery({
      variables: { handle }
    })
  }

  const fetchProducts = (query, perPage) => {
    fetchProductsQuery({
      variables: {
        query: query,
        first: perPage
      }
    })
  }

  const fetchProductRecommendations = (productId) => {
    fetchProductRecommendationsQuery({
      variables: {
        productId
      }
    })
  }


  useEffect(() => {
    if(fetchProductResp?.data){
      setProduct(fetchProductResp?.data)
      setImages(
        fetchProductResp?.data?.
        productByHandle?.
        images?.
        edges.map(e => e.node.src)
      )
    }
  }, [fetchProductResp?.data])

  useEffect(() => {
    if(fetchProductsResp?.data){
      setProducts(fetchProductsResp?.data?.products?.edges.map(e => e.node))
    }
  }, [fetchProductsResp?.data])

  useEffect(() => {
    if(fetchProductRecommendationsResp?.data){
      setProducts(fetchProductRecommendationsResp?.data?.productRecommendations)
    }
  }, [fetchProductRecommendationsResp?.data])

  useEffect(() => {
    setError({
      ...fetchProductResp?.error,
      ...fetchProductsResp?.error,
      ...fetchProductRecommendationsResp?.error
    })
  }, [
    fetchProductResp?.error,
    fetchProductsResp?.error,
    fetchProductRecommendationsResp?.error
  ])

  useEffect(() => {
    setLoading(
      fetchProductResp?.loading ||
      fetchProductsResp?.loading ||
      fetchProductRecommendationsResp?.loading
    )
  }, [
    fetchProductResp?.loading,
    fetchProductsResp?.loading,
    fetchProductRecommendationsResp?.loading
  ])

  return {
    images,
    product,
    products,
    fetchProduct,
    fetchProducts,
    fetchProductRecommendations,
    loading,
    error
  }
}

export default useProducts
