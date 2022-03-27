"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_SHOP = void 0;

var _client = require("@apollo/client");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var QUERY_SHOP = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query {\n    shop {\n      name\n      description\n      primaryDomain {\n        url\n        host\n      }\n      privacyPolicy {\n        url\n      }\n      refundPolicy {\n        url\n      }\n      termsOfService {\n        url\n      }\n    }\n  }\n"])));
exports.QUERY_SHOP = QUERY_SHOP;