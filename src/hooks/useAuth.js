import React, { useState, useEffect, useContext } from 'react'
import useAlerts from '../../hooks/useAlerts'
import { useLazyQuery, useMutation } from '@apollo/client'
import ShopContext from '../context/ShopContext'
import {
  MUTATION_SIGN_IN,
  MUTATION_SIGN_UP,
  MUTATION_SIGN_OUT,
  MUTATION_REFRESH_TOKEN
} from 'graphql/auth'

const useAuth = ({ ...props }) => {

  const {
    currentUser,
    setCurrentUser,
    accessToken,
    setAccessToken,
    expiresAt,
    setExpiresAt,
  } = useContext(ShopContext)

  const [data, setData] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [signInMutation, signInResp] = useMutation(MUTATION_SIGN_IN)
  const [signUpMutation, signUpResp] = useMutation(MUTATION_SIGN_UP)
  const [signOutMutation, signOutResp] = useMutation(MUTATION_SIGN_OUT)
  const [refreshTokenMutation, refreshTokenResp] = useMutation(MUTATION_REFRESH_TOKEN)

  const signIn = async (email, password) => {
    await signInMutation({
      variables: {
        input: { email, password }
      }
    })
  }

  const signUp = async (email, password) => {
    try{
      await signUpMutation({
        variables: {
          input: { email, password }
        }
      })
    }catch(e){
      console.log(e)
      setError("Creating Customer Limit exceeded. Please try again later.")
    }
  }

  const signOut = async () => {
    await signOutMutation({
      variables: {
        customerAccessToken: accessToken
      }
    })
  }

  const refreshToken = async (token) => {
    await refreshTokenMutation({
      variables: {
        customerAccessToken: token
      }
    })
  }

  useEffect(() => {
    if(signInResp?.data){
      const token = signInResp?.data?.
        customerAccessTokenCreate?.
        customerAccessToken?.
        accessToken

      const expires = signInResp?.data?.
        customerAccessTokenCreate?.
        customerAccessToken?.
        expiresAt

      if(token && expires){
        setAccessToken(token)
        setExpiresAt(expires)
        localStorage.setItem('access_token', token)
        localStorage.setItem('expires_at', expires)
      }
      if(signInResp?.data?.customerAccessTokenCreate?.customerUserErrors){
        setError(signInResp?.data?.customerAccessTokenCreate?.customerUserErrors[0])
      }
    }
  },[signInResp?.data])

  useEffect(() => {
    if(signUpResp?.data){
      setCurrentUser(signUpResp?.data?.customerCreate)
      if(signUpResp?.data?.customerCreate?.customerUserErrors){
        setError(signUpResp?.data?.customerCreate?.customerUserErrors[0])
      }
    }
  }, [signUpResp?.data])

  useEffect(() => {
    if(signOutResp?.data){
      setAccessToken()
      setExpiresAt()
      localStorage.removeItem('access_token')
      localStorage.removeItem('expires_at')
    }
  }, [signOutResp?.data])

  useEffect(() => {
    setLoading({
      ...signInResp?.error,
      ...signUpResp?.error,
      ...signOutResp?.error,
      ...refreshTokenResp?.error
    })
  },[
    signInResp?.error,
    signUpResp?.error,
    signOutResp?.error,
    refreshTokenResp?.error
  ])

  useEffect(() => {
    setLoading(
      signInResp?.loading ||
      signUpResp?.loading ||
      signOutResp?.loading ||
      refreshTokenResp?.loading
    )
  },[
    signInResp?.loading,
    signUpResp?.loading,
    signOutResp?.loading,
    refreshTokenResp?.loading
  ])

  return {
    accessToken,
    currentUser,
    expiresAt,
    data,
    loading,
    error,
    signIn,
    signOut,
    signUp,
    refreshToken
  }
}

export default useAuth
