"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutFragment = exports.CHECKOUT_LINE_ITEMS_UPDATE = exports.CHECKOUT_LINE_ITEMS_REMOVE = exports.CHECKOUT_LINE_ITEMS_ADD = exports.CHECKOUT_FETCH = exports.CHECKOUT_CUSTOMER_ASSOCIATE = exports.CHECKOUT_CREATE = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckoutFragment = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment CheckoutFragment on Checkout {\n    id\n    email\n    webUrl\n    totalTax\n    subtotalPrice\n    totalPrice\n    totalPriceV2 {\n      amount\n      currencyCode\n    }\n    lineItemsSubtotalPrice {\n      amount\n      currencyCode\n    }\n    note\n    ready\n    completedAt\n    lineItems (first: 250) {\n      edges {\n        node {\n          id\n          title\n          variant {\n            id\n            title\n            image {\n              src\n            }\n            price\n          }\n          quantity\n        }\n      }\n    }\n    discountApplications(first: 10) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          targetSelection\n          allocationMethod\n          targetType\n          value {\n            ... on MoneyV2 {\n              amount\n              currencyCode\n            }\n            ... on PricingPercentageValue {\n              percentage\n            }\n          }\n          ... on ManualDiscountApplication {\n            title\n            description\n          }\n          ... on DiscountCodeApplication {\n            code\n            applicable\n          }\n          ... on ScriptDiscountApplication {\n            description\n          }\n          ... on AutomaticDiscountApplication {\n            title\n          }\n        }\n      }\n    }\n  }\n"])));
exports.CheckoutFragment = CheckoutFragment;
var CHECKOUT_FETCH = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n query checkout($id: ID!) {\n  node(id: $id) {\n    ...CheckoutFragment\n  }\n}\n", "\n"])), CheckoutFragment);
exports.CHECKOUT_FETCH = CHECKOUT_FETCH;
var CHECKOUT_CREATE = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  mutation checkoutCreate($input: CheckoutCreateInput!){\n    checkoutCreate(input: $input) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"])), CheckoutFragment);
exports.CHECKOUT_CREATE = CHECKOUT_CREATE;
var CHECKOUT_LINE_ITEMS_ADD = (0, _client.gql)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsAdd ($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"])), CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_ADD = CHECKOUT_LINE_ITEMS_ADD;
var CHECKOUT_LINE_ITEMS_UPDATE = (0, _client.gql)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      userErrors {\n        message\n        field\n      }\n      checkoutUserErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"])), CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_UPDATE = CHECKOUT_LINE_ITEMS_UPDATE;
var CHECKOUT_LINE_ITEMS_REMOVE = (0, _client.gql)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  mutation checkoutLineItemsRemove ($checkoutId: ID!, $lineItemIds: [ID!]!) {\n    checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n      userErrors {\n        message\n        field\n      }\n      checkoutUserErrors {\n        message\n        field\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"])), CheckoutFragment);
exports.CHECKOUT_LINE_ITEMS_REMOVE = CHECKOUT_LINE_ITEMS_REMOVE;
var CHECKOUT_CUSTOMER_ASSOCIATE = (0, _client.gql)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  mutation checkoutCustomerAssociate($checkoutId: ID!, $customerAccessToken: String!) {\n    checkoutCustomerAssociate(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {\n      userErrors {\n        field\n        message\n      }\n      checkout {\n        ...CheckoutFragment\n      }\n    }\n  }\n  ", "\n"])), CheckoutFragment);
exports.CHECKOUT_CUSTOMER_ASSOCIATE = CHECKOUT_CUSTOMER_ASSOCIATE;