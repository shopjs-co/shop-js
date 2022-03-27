import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  QUERY_COLLECTION,
  QUERY_COLLECTIONS
} from '../graphql/collections'

const useCollections = () => {

  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [image, setImage] = useState()
  const [products, setProducts] = useState()
  const [collection, setCollection] = useState()
  const [collections, setCollections] = useState()

  const [
    fetchCollectionQuery,
    fetchCollectionResp
  ] = useLazyQuery(QUERY_COLLECTION)

  const [
    fetchCollectionsQuery,
    fetchCollectionsResp
  ] = useLazyQuery(QUERY_COLLECTIONS)

  const fetchCollection = (handle, perPage=250) => {
    fetchCollectionQuery({
      variables: {
        handle: handle,
        first: perPage
      }
    })
  }

  const fetchCollections = (perPage=250) => {
    fetchCollectionsQuery({
      variables: {
        first: perPage
      }
    })
  }

  useEffect(() => {
    if(fetchCollectionResp?.data){
      setCollection(fetchCollectionResp?.data)
      setProducts(fetchCollectionResp?.data?.
          collectionByHandle?.products?.edges?.map(e => e.node))
      setImage(fetchCollectionResp?.data?.collectionByHandle?.image?.originalSrc)
    }
  }, [fetchCollectionResp?.data])

  useEffect(() => {
    if(fetchCollectionsResp?.data){
      setCollections(fetchCollectionsResp?.data?.collections?.edges.map(e => e.node))
    }
  }, [fetchCollectionsResp?.data])

  useEffect(() => {
    setLoading(fetchCollectionResp?.loading || fetchCollectionsResp?.loading)
  },[fetchCollectionResp?.loading, fetchCollectionsResp?.loading])

  useEffect(() => {
    setError({
      ...fetchCollectionResp?.error,
      ...fetchCollectionsResp?.error
    })
  },[fetchCollectionResp?.error, fetchCollectionsResp?.error])

  return {
    collection,
    collections,
    fetchCollection,
    fetchCollections,
    image,
    products,
    loading,
    error,
  }
}

export default useCollections
