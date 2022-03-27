"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_CUSTOMER = exports.MUTATION_CUSTOMER_UPDATE = exports.MUTATION_CUSTOMER_ADDRESS_UPDATE = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var QUERY_CUSTOMER = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query GetCustomerData($customerAccessToken: String!){\n     customer(customerAccessToken: $customerAccessToken) {\n        id\n        createdAt\n        displayName\n        firstName\n        lastName\n        email\n        phone\n        defaultAddress{\n          id\n          firstName\n          lastName\n          company\n          address1\n          address2\n          city\n          province\n          country\n          zip\n          phone\n        }\n     }\n   }\n"])));
exports.QUERY_CUSTOMER = QUERY_CUSTOMER;
var MUTATION_CUSTOMER_UPDATE = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {\n      customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {\n        customer {\n          id\n        }\n        customerAccessToken {\n          accessToken\n          expiresAt\n        }\n        customerUserErrors {\n          code\n          field\n          message\n        }\n      }\n    }\n  "])));
exports.MUTATION_CUSTOMER_UPDATE = MUTATION_CUSTOMER_UPDATE;
var MUTATION_CUSTOMER_ADDRESS_UPDATE = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    mutation customerAddressUpdate($customerAccessToken: String!, $id: ID!, $address: MailingAddressInput!) {\n      customerAddressUpdate(customerAccessToken: $customerAccessToken, id: $id, address: $address) {\n        customerAddress {\n          id\n        }\n        customerUserErrors {\n          code\n          field\n          message\n        }\n      }\n    }\n    "])));
exports.MUTATION_CUSTOMER_ADDRESS_UPDATE = MUTATION_CUSTOMER_ADDRESS_UPDATE;