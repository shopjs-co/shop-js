import { gql } from '@apollo/client';
import { ProductFragment } from 'graphql/products'

const CollectionFragment = gql`
  fragment CollectionFragment on Collection {
    id
    handle
    title
    description
    descriptionHtml
    image {
      id
      originalSrc
    }
    updatedAt
  }

`

export const QUERY_COLLECTION = gql`
  query Collection($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      ...CollectionFragment
      products(first: $first) {
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
  }
  ${CollectionFragment}
  ${ProductFragment}
`;

export const QUERY_COLLECTIONS = gql`
  query Collections($first: Int!, $query: String) {
    collections(first: $first, query: $query) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ...CollectionFragment
        }
      }
    }
  }
  ${CollectionFragment}
`;
