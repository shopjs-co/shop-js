"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_CUSTOMER_ORDERS = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderFragment = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment OrderFragment on Order {\n    id\n    name\n    statusUrl\n    subtotalPrice\n    orderNumber\n    processedAt\n    currencyCode\n    totalTax\n    totalPrice\n    totalRefunded\n    totalShippingPrice\n    lineItems(first:250){\n      edges{\n        node {\n          title\n          quantity\n          variant{\n            price\n            image{\n              src\n            }\n            selectedOptions{\n              name\n              value\n            }\n            product{\n              handle\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var QUERY_CUSTOMER_ORDERS = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query GetCustomerPastOrders($customerAccessToken: String!, $first: Int, $cursor: String){\n    customer(customerAccessToken:$customerAccessToken) {\n      orders(first: $first, after: $cursor){\n         edges{\n           cursor\n           node{\n            ...OrderFragment\n          }\n         }\n          pageInfo{\n            hasPreviousPage\n            hasNextPage\n          }\n       }\n   }\n  }\n  ", "\n"])), OrderFragment);
exports.QUERY_CUSTOMER_ORDERS = QUERY_CUSTOMER_ORDERS;