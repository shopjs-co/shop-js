import { gql } from '@apollo/client';

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    availableForSale
    createdAt
    description
    descriptionHtml
    handle
    id
    images(first: 250) {
      edges {
        node {
          id
          altText
          src
        }
      }
    }
    metafields(first: 250) {
      edges {
        node {
          description
          id
          key
          namespace
          value
          valueType
        }
      }
    }
    onlineStoreUrl
    options {
      id
      name
      values
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
      maxVariantPrice {
        amount
        currencyCode
      }
    }
    productType
    publishedAt
    tags
    title
    updatedAt
    variants(first: 250) {
      edges {
        node {
          availableForSale
          compareAtPrice
          compareAtPriceV2 {
            amount
            currencyCode
          }
          id
          image {
            altText
            id
            originalSrc
          }
          metafields(first: 250) {
            edges {
              node {
                description
                id
                key
                namespace
                value
                valueType
              }
            }
          }
          price
          priceV2 {
            amount
            currencyCode
          }
          requiresShipping
          selectedOptions {
            name
            value
          }
          sku
          title
          weight
          weightUnit
          presentmentPrices(first: 250) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
                compareAtPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
    vendor
  }
`;

export const QUERY_PRODUCT = gql`
  query Product($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`;

export const QUERY_PRODUCTS = gql`
  query Products($first: Int!, $query: String, $sortKey: ProductSortKeys) {
    products(first: $first, query: $query, sortKey: $sortKey) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${ProductFragment}
`;

export const QUERY_PRODUCT_RECOMMENDATIONS = gql`
  query ProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...ProductFragment
    }
  }
  ${ProductFragment}
`;
