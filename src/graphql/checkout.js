import { gql } from '@apollo/client';

export const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    email
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    totalPriceV2 {
      amount
      currencyCode
    }
    lineItemsSubtotalPrice {
      amount
      currencyCode
    }
    note
    ready
    completedAt
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
    discountApplications(first: 10) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          targetSelection
          allocationMethod
          targetType
          value {
            ... on MoneyV2 {
              amount
              currencyCode
            }
            ... on PricingPercentageValue {
              percentage
            }
          }
          ... on ManualDiscountApplication {
            title
            description
          }
          ... on DiscountCodeApplication {
            code
            applicable
          }
          ... on ScriptDiscountApplication {
            description
          }
          ... on AutomaticDiscountApplication {
            title
          }
        }
      }
    }
  }
`;

export const CHECKOUT_FETCH = gql`
 query checkout($id: ID!) {
  node(id: $id) {
    ...CheckoutFragment
  }
}
${CheckoutFragment}
`

export const CHECKOUT_CREATE = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!){
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const CHECKOUT_LINE_ITEMS_ADD = gql`
  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const CHECKOUT_LINE_ITEMS_UPDATE = gql`
  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkoutUserErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const CHECKOUT_LINE_ITEMS_REMOVE = gql`
  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
      userErrors {
        message
        field
      }
      checkoutUserErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const CHECKOUT_CUSTOMER_ASSOCIATE = gql`
  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {
    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
