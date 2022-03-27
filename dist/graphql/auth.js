"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MUTATION_SIGN_UP = exports.MUTATION_SIGN_OUT = exports.MUTATION_SIGN_IN = exports.MUTATION_REFRESH_TOKEN = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MUTATION_SIGN_IN = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {\n    customerAccessTokenCreate(input: $input) {\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n"])));
exports.MUTATION_SIGN_IN = MUTATION_SIGN_IN;
var MUTATION_REFRESH_TOKEN = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  mutation customerAccessTokenRenew($customerAccessToken: String!) {\n    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {\n      customerAccessToken {\n        accessToken\n        expiresAt\n      }\n      customerUserErrors {\n        field\n        message\n      }\n    }\n  }\n"])));
exports.MUTATION_REFRESH_TOKEN = MUTATION_REFRESH_TOKEN;
var MUTATION_SIGN_OUT = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  mutation customerAccessTokenDelete($customerAccessToken: String!) {\n    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {\n      deletedAccessToken\n      deletedCustomerAccessTokenId\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n"])));
exports.MUTATION_SIGN_OUT = MUTATION_SIGN_OUT;
var MUTATION_SIGN_UP = (0, _client.gql)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  mutation customerCreate($input: CustomerCreateInput!){\n    customerCreate(input: $input) {\n      customer {\n        id\n        email\n      }\n      customerUserErrors {\n        field\n        message\n      }\n    }\n  }\n"])));
exports.MUTATION_SIGN_UP = MUTATION_SIGN_UP;