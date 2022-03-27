import { gql } from '@apollo/client';

const PageFragment = gql`
  fragment PageFragment on Page {
    id
    handle
    title
    body
    bodySummary
    url
    createdAt
    updatedAt
  }
`

export const QUERY_PAGE = gql`
  query Page($handle: String!) {
    pageByHandle(handle: $handle) {
      ...PageFragment
    }
  }
  ${PageFragment}
`;

export const QUERY_PAGES = gql`
  query Pages($first: Int!, $query: String) {
    pages(first: $first, query: $query) {
      edges {
        node {
          ...PageFragment
        }
      }
    }
  }
  ${PageFragment}
`;
