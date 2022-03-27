import { gql } from '@apollo/client';

export const QUERY_SHOP = gql`
  query {
    shop {
      name
      description
      primaryDomain {
        url
        host
      }
      privacyPolicy {
        url
      }
      refundPolicy {
        url
      }
      termsOfService {
        url
      }
    }
  }
`;
