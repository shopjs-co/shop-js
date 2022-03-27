import React, { useState, useEffect, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import ShopContext from '../context/ShopContext'
import {
  QUERY_CUSTOMER_ORDERS
} from 'graphql/orders'

const useOrders = () => {

  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [order, setOrder] = useState()
  const [orders, setOrders] = useState()
  const [lineItems, setLineItems] = useState()

  const [
    fetchCustomerOrdersQuery,
    fetchCustomerOrdersResp
  ] = useLazyQuery(QUERY_CUSTOMER_ORDERS)

  const fetchCustomerOrder = (accessToken, perPage=20, cursor=null) => {
    fetchCustomerOrdersQuery({
      variables: {
      customerAccessToken: accessToken,
      first: perPage,
      cursor
    }
    })
  }

  const selectOrder = (order) => {
    setOrder(order)
    setLineItems(order?.lineItems?.edges.map(e => e.node ))
  }

  const fetchCustomerOrders = (accessToken, perPage=10, cursor=null) => {
    fetchCustomerOrdersQuery({
      variables: {
      customerAccessToken: accessToken,
      first: perPage,
      cursor
    }
    })
  }

  useEffect(() => {
    if(fetchCustomerOrdersResp?.data){
      setOrders(fetchCustomerOrdersResp?.data?.customer?.orders?.edges.map(e => e.node))
    }
  }, [fetchCustomerOrdersResp?.data])


  useEffect(() => {
    setError({
      ...fetchCustomerOrdersResp?.error,
    })
  }, [
    fetchCustomerOrdersResp?.error,
  ])

  useEffect(() => {
    setLoading(fetchCustomerOrdersResp?.loading)
  }, [fetchCustomerOrdersResp?.loading])

  return {
    order,
    orders,
    lineItems,
    selectOrder,
    fetchCustomerOrders,
    loading,
    error
  }
}

export default useOrders
