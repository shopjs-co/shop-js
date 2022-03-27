"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addApolloState = addApolloState;
exports.initApollo = initApollo;
exports.useApollo = useApollo;

var _react = require("react");

var _client = require("@apollo/client");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloLinkContext = require("apollo-link-context");

var apolloClient;

function createApolloClient(_ref) {
  var shopifyDomain = _ref.shopifyDomain,
      shopifyStorefontToken = _ref.shopifyStorefontToken;
  var httpLink = (0, _apolloLinkHttp.createHttpLink)({
    uri: "https://".concat(shopifyDomain, "/api/2020-10/graphql.json")
  });
  var middlewareLink = (0, _apolloLinkContext.setContext)(function () {
    return {
      headers: {
        'Content-Type': 'application/graphql',
        'X-Shopify-Storefront-Access-Token': shopifyStorefontToken
      }
    };
  });
  return new _client.ApolloClient({
    link: middlewareLink.concat(httpLink),
    cache: new _client.InMemoryCache()
  });
}

function initApollo() {
  var _apolloClient2;

  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var shopifyDomain = initialState.shopifyDomain,
      shopifyStorefontToken = initialState.shopifyStorefontToken;

  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient({
    shopifyDomain: shopifyDomain,
    shopifyStorefontToken: shopifyStorefontToken
  }); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    _apolloClient.cache.restore(initialState);
  } // For SSG and SSR always create a new Apollo Client


  if (typeof window === 'undefined') return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

function addApolloState(client, pageProps) {
  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

function useApollo(initialState) {
  var store = (0, _react.useMemo)(function () {
    return initApollo(initialState);
  }, [initialState]);
  return store;
}