import React, { useState } from 'react'
import ShopContext from './ShopContext'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@apollo/client'

const ShopProvider = ({ 
      children, 
      shopifyStorefrontToken, 
      shopifyDomain,      
      ...rest 
    }) => {


  const apolloClient = useApollo({
    shopifyDomain,
    shopifyStorefrontToken
  })

  const [accessToken, setAccessToken] = useState()
  const [alert, setAlert] = useState()
  const [checkout, setCheckout] = useState()
  const [collections, setCollections] = useState([])
  const [currentUser, setCurrentUser] = useState()
  const [expiresAt, setExpiresAt] = useState()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [lineItemTotal, setLineItemTotal] = useState(0)

  const [authOpen, setAuthOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleOpenAuth = () => setAuthOpen(!authOpen)
  const toggleOpenCart = () => setCartOpen(!cartOpen)
  const toggleOpenMenu = () => setMenuOpen(!menuOpen)
  const isLoading = () => setLoading(true)
  const isLoaded = () => setLoading(false)

  const value = {
    accessToken,
    setAccessToken,

    alert,
    setAlert,
    
    expiresAt,
    setExpiresAt,
    
    currentUser,
    setCurrentUser,

    loading,
    isLoading,
    isLoaded,

    authOpen,
    toggleOpenAuth,
    cartOpen,
    toggleOpenCart,
    menuOpen,
    toggleOpenMenu,
    checkout,
    setCheckout,
    lineItemTotal,
    setLineItemTotal,
    
    shopifyDomain,
    shopifyStorefrontToken,

    products,
    setProducts,

    collections,
    setCollections
  }

  return(
    <ShopContext.Provider value={ value }>
      <ApolloProvider client={apolloClient}>
        { children }
      </ApolloProvider>
    </ShopContext.Provider>
  )
}

export default ShopProvider