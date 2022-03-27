"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QUERY_PAGES = exports.QUERY_PAGE = void 0;

var _client = require("@apollo/client");

var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageFragment = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  fragment PageFragment on Page {\n    id\n    handle\n    title\n    body\n    bodySummary\n    url\n    createdAt\n    updatedAt\n  }\n"])));
var QUERY_PAGE = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query Page($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...PageFragment\n    }\n  }\n  ", "\n"])), PageFragment);
exports.QUERY_PAGE = QUERY_PAGE;
var QUERY_PAGES = (0, _client.gql)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  query Pages($first: Int!, $query: String) {\n    pages(first: $first, query: $query) {\n      edges {\n        node {\n          ...PageFragment\n        }\n      }\n    }\n  }\n  ", "\n"])), PageFragment);
exports.QUERY_PAGES = QUERY_PAGES;