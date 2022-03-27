"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_COLLECTIONS = exports.QUERY_COLLECTION = void 0;

var _client = require("@apollo/client");

var _products = require("graphql/products");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CollectionFragment = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment CollectionFragment on Collection {\n    id\n    handle\n    title\n    description\n    descriptionHtml\n    image {\n      id\n      originalSrc\n    }\n    updatedAt\n  }\n\n"])));
var QUERY_COLLECTION = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query Collection($handle: String!, $first: Int!) {\n    collectionByHandle(handle: $handle) {\n      ...CollectionFragment\n      products(first: $first) {\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n        }\n        edges {\n          node {\n            ...ProductFragment\n          }\n        }\n      }\n    }\n  }\n  ", "\n  ", "\n"])), CollectionFragment, _products.ProductFragment);
exports.QUERY_COLLECTION = QUERY_COLLECTION;
var QUERY_COLLECTIONS = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  query Collections($first: Int!, $query: String) {\n    collections(first: $first, query: $query) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...CollectionFragment\n        }\n      }\n    }\n  }\n  ", "\n"])), CollectionFragment);
exports.QUERY_COLLECTIONS = QUERY_COLLECTIONS;