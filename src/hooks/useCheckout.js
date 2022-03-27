import React, { useState, useEffect, useContext } from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'
import ShopContext from '../context/ShopContext'
import {
  CHECKOUT_FETCH,
  CHECKOUT_CREATE,
  CHECKOUT_LINE_ITEMS_ADD,
  CHECKOUT_LINE_ITEMS_REMOVE,
} from 'graphql/checkout'
import {
  CHECKOUT_DISCOUNT_CODE_APPLY,
  CHECKOUT_DISCOUNT_CODE_REMOVE,
} from 'graphql/discounts'

const useCheckout = ({ ...props }) => {

  const {
    checkout,
    setCheckout,
    setLineItemTotal
  } = useContext(ShopContext)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [discountCodes, setDiscountCodes] = useState([])
  const [discountCodeError, setDiscountCodeError] = useState()

  const [
    checkoutCreateMutation,
    checkoutCreateResp
  ] = useMutation(CHECKOUT_CREATE)

  const [
    checkoutLineItemsAddMutation,
    checkoutLineItemsAddResp
  ] = useMutation(CHECKOUT_LINE_ITEMS_ADD)

  const [
    checkoutLineItemsRemoveMutation,
    checkoutLineItemsRemoveResp
  ] = useMutation(CHECKOUT_LINE_ITEMS_REMOVE)

  const [
    checkoutDiscountCodeApplyMutation,
    checkoutDiscountCodeApplyResp
  ] = useMutation(CHECKOUT_DISCOUNT_CODE_APPLY)

  const [
    checkoutDiscountCodeRemoveMutation,
    checkoutDiscountCodeRemoveResp
  ] = useMutation(CHECKOUT_DISCOUNT_CODE_REMOVE)

  const [
    checkoutFetchQuery,
    checkoutFetchResp
  ] = useLazyQuery(CHECKOUT_FETCH)

  const checkoutLineItemsAdd = (variantId, quantity) => {
    checkoutLineItemsAddMutation({
      variables: {
        checkoutId: checkout?.id,
        lineItems: [{ variantId, quantity }]
      }
    })
  }

  const checkoutLineItemsRemove = (lineItemId) => {
    checkoutLineItemsRemoveMutation({
      variables: {
        checkoutId: checkout?.id,
        lineItemIds: [lineItemId]
      }
    })
  }

  const checkoutDiscountCodeApply = (discountCode) => {
    checkoutDiscountCodeApplyMutation({
      variables: {
        checkoutId: checkout?.id,
        discountCode: discountCode
      }
    })
  }

  const checkoutDiscountCodeRemove = () => {
    checkoutDiscountCodeRemoveMutation({
      variables: {
        checkoutId: checkout?.id
      }
    })
  }

  const checkoutFindOrCreate = () => {
    let checkoutId = localStorage.getItem('checkout_id')
    if(checkoutId){
      checkoutFetchQuery({
        variables: { id: checkoutId }
      })
    }else{
      const variables = { input: {} };
      checkoutCreateMutation({ variables })
    }
  }

  const updateLineItemTotal = () => {
    if(!checkout?.lineItems) return;
    let total = checkout
      .lineItems
      .edges
      .map(({ node: li }) => li.quantity)
      .reduce((a,b) => a + b, 0)
    setLineItemTotal(total)
  }

  // Set discounts and discount error codes
  useEffect(() => {
    if(checkout?.discountApplications?.edges){
      let codes = checkout?.discountApplications?.edges.map(({ node: discount }) => {
        return {
          code: discount.code,
          amount: discount.value?.amount,
          percentage: discount.value?.percentage
        }
      })
      setDiscountCodes(codes)
    }
  }, [checkout])

   useEffect(() => {
     if(checkoutDiscountCodeApplyResp
        ?.data
        ?.checkoutDiscountCodeApplyV2
        ?.checkoutUserErrors
      ){
        checkoutDiscountCodeApplyResp.
          data.
          checkoutDiscountCodeApplyV2.
          checkoutUserErrors.map(err => {
            setDiscountCodeError(err)
          })
     }else{
       setDiscountCodeError()
     }
   }, [checkoutDiscountCodeApplyResp?.data])

   useEffect(() => {
     if(checkoutFetchResp?.data){
       setCheckout(checkoutFetchResp?.data?.node)
       setLoading(checkoutFetchResp?.loading)
       setError(checkoutFetchResp?.error)
     }
   }, [checkoutFetchResp?.data])

  useEffect(() => {
    if(checkoutCreateResp?.data){
      localStorage.setItem('checkout_id',
        checkoutCreateResp?.data?.checkoutCreate?.checkout?.id
      );
      setCheckout(checkoutCreateResp?.data?.checkoutCreate?.checkout)
    }
  },[checkoutCreateResp?.data])

  useEffect(() => {
    if(checkoutLineItemsAddResp?.data){
      setCheckout(checkoutLineItemsAddResp?.data?.checkoutLineItemsAdd?.checkout)
      setError(checkoutLineItemsAddResp?.error)
    }
  }, [checkoutLineItemsAddResp?.data])

  useEffect(() => {
    if(checkoutLineItemsRemoveResp?.data){
      setCheckout(checkoutLineItemsRemoveResp?.data?.checkoutLineItemsRemove?.checkout)
      setError(checkoutLineItemsRemoveResp?.error)
    }
  }, [checkoutLineItemsRemoveResp?.data])

  useEffect(() => {
    if(checkoutDiscountCodeApplyResp?.data){
      setCheckout(checkoutDiscountCodeApplyResp?.data?.checkoutDiscountCodeApplyV2?.checkout)
      setError(checkoutDiscountCodeApplyResp?.error)
    }
  }, [checkoutDiscountCodeApplyResp?.data])

  useEffect(() => {
    if(checkoutDiscountCodeRemoveResp?.data){
      setCheckout(checkoutDiscountCodeRemoveResp?.data?.checkoutDiscountCodeRemove?.checkout)
      setError(checkoutDiscountCodeRemoveResp?.error)
    }
  }, [checkoutDiscountCodeRemoveResp?.data])

  useEffect(() => {
    if(checkout){
      updateLineItemTotal();
    }
  }, [checkout])

  useEffect(() => {
    checkoutFindOrCreate()
  }, [])

  useEffect(() => {
    setError({
      ...checkoutFetchResp?.error,
      ...checkoutCreateResp?.error,
      ...checkoutLineItemsAdd?.error,
      ...checkoutLineItemsRemove?.error,
      ...checkoutDiscountCodeApplyResp?.error,
      ...checkoutDiscountCodeRemoveResp?.error
    })
  },[
    checkoutFetchResp?.error,
    checkoutCreateResp?.error,
    checkoutLineItemsAdd?.error,
    checkoutLineItemsRemove?.error,
    checkoutDiscountCodeApplyResp?.error,
    checkoutDiscountCodeRemoveResp?.error,
  ])

  useEffect(() => {
    setLoading(
      checkoutFetchResp?.loading ||
      checkoutCreateResp?.loading ||
      checkoutLineItemsAddResp?.loading ||
      checkoutLineItemsRemoveResp?.loading ||
      checkoutDiscountCodeApplyResp?.loading ||
      checkoutDiscountCodeRemoveResp?.loading
    )
  },[
    checkoutFetchResp?.loading,
    checkoutCreateResp?.loading,
    checkoutLineItemsAddResp?.loading,
    checkoutLineItemsRemoveResp?.loading,
    checkoutDiscountCodeApplyResp?.loading,
    checkoutDiscountCodeRemoveResp?.loading,
  ])

  return {
    loading,
    error,
    checkout,
    discountCodes,
    discountCodeError,
    setDiscountCodeError,
    checkoutLineItemsAdd,
    checkoutLineItemsRemove,
    checkoutDiscountCodeApply,
    checkoutDiscountCodeRemove
  }
}

export default useCheckout;
