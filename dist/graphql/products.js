"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_PRODUCT_RECOMMENDATIONS = exports.QUERY_PRODUCTS = exports.QUERY_PRODUCT = exports.ProductFragment = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductFragment = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment ProductFragment on Product {\n    availableForSale\n    createdAt\n    description\n    descriptionHtml\n    handle\n    id\n    images(first: 250) {\n      edges {\n        node {\n          id\n          altText\n          src\n        }\n      }\n    }\n    metafields(first: 250) {\n      edges {\n        node {\n          description\n          id\n          key\n          namespace\n          value\n          valueType\n        }\n      }\n    }\n    onlineStoreUrl\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    productType\n    publishedAt\n    tags\n    title\n    updatedAt\n    variants(first: 250) {\n      edges {\n        node {\n          availableForSale\n          compareAtPrice\n          compareAtPriceV2 {\n            amount\n            currencyCode\n          }\n          id\n          image {\n            altText\n            id\n            originalSrc\n          }\n          metafields(first: 250) {\n            edges {\n              node {\n                description\n                id\n                key\n                namespace\n                value\n                valueType\n              }\n            }\n          }\n          price\n          priceV2 {\n            amount\n            currencyCode\n          }\n          requiresShipping\n          selectedOptions {\n            name\n            value\n          }\n          sku\n          title\n          weight\n          weightUnit\n          presentmentPrices(first: 250) {\n            edges {\n              node {\n                price {\n                  amount\n                  currencyCode\n                }\n                compareAtPrice {\n                  amount\n                  currencyCode\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    vendor\n  }\n"])));
exports.ProductFragment = ProductFragment;
var QUERY_PRODUCT = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query Product($handle: String!) {\n    productByHandle(handle: $handle) {\n      ...ProductFragment\n    }\n  }\n  ", "\n"])), ProductFragment);
exports.QUERY_PRODUCT = QUERY_PRODUCT;
var QUERY_PRODUCTS = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  query Products($first: Int!, $query: String, $sortKey: ProductSortKeys) {\n    products(first: $first, query: $query, sortKey: $sortKey) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        node {\n          ...ProductFragment\n        }\n      }\n    }\n  }\n  ", "\n"])), ProductFragment);
exports.QUERY_PRODUCTS = QUERY_PRODUCTS;
var QUERY_PRODUCT_RECOMMENDATIONS = (0, _client.gql)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  query ProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...ProductFragment\n    }\n  }\n  ", "\n"])), ProductFragment);
exports.QUERY_PRODUCT_RECOMMENDATIONS = QUERY_PRODUCT_RECOMMENDATIONS;