import { gql } from '@apollo/client'

export const QUERY_CUSTOMER = gql`
  query GetCustomerData($customerAccessToken: String!){
     customer(customerAccessToken: $customerAccessToken) {
        id
        createdAt
        displayName
        firstName
        lastName
        email
        phone
        defaultAddress{
          id
          firstName
          lastName
          company
          address1
          address2
          city
          province
          country
          zip
          phone
        }
     }
   }
`

export const MUTATION_CUSTOMER_UPDATE = gql`
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
      customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
        customer {
          id
        }
        customerAccessToken {
          accessToken
          expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `

  export const MUTATION_CUSTOMER_ADDRESS_UPDATE = gql`
    mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {
      customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {
        customerAddress {
          id
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
    `
