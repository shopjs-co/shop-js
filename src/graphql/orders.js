import { gql } from '@apollo/client'

const OrderFragment = gql`
  fragment OrderFragment on Order {
    id
    name
    statusUrl
    subtotalPrice
    orderNumber
    processedAt
    currencyCode
    totalTax
    totalPrice
    totalRefunded
    totalShippingPrice
    lineItems(first:250){
      edges{
        node {
          title
          quantity
          variant{
            price
            image{
              src
            }
            selectedOptions{
              name
              value
            }
            product{
              handle
            }
          }
        }
      }
    }
  }
`

export const QUERY_CUSTOMER_ORDERS = gql`
  query GetCustomerPastOrders($customerAccessToken: String!, $first: Int, $cursor: String){
    customer(customerAccessToken:$customerAccessToken) {
      orders(first: $first, after: $cursor){
         edges{
           cursor
           node{
            ...OrderFragment
          }
         }
          pageInfo{
            hasPreviousPage
            hasNextPage
          }
       }
   }
  }
  ${OrderFragment}
`
