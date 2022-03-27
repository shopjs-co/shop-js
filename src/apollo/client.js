import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

let apolloClient

function createApolloClient({ shopifyDomain, shopifyStorefrontToken }) {

  const httpLink = createHttpLink({
    uri: `https://${shopifyDomain}/api/2020-10/graphql.json`
  })

  const middlewareLink = setContext(() => ({
    headers: {
      'Content-Type': 'application/graphql',
      'X-Shopify-Storefront-Access-Token': shopifyStorefrontToken
    }
  }))

  return new ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export function initApollo(initialState = null) {
  const { shopifyDomain, shopifyStorefrontToken } = initialState || {}
  const _apolloClient = apolloClient ?? createApolloClient({ shopifyDomain, shopifyStorefrontToken })

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }
  return pageProps
}

export function useApollo(initialState) {
  const store = useMemo(() => initApollo(initialState), [initialState])
  return store
}
