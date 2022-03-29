"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useCollections2 = _interopRequireDefault(require("../../hooks/useCollections"));

var _ProductCarousel = _interopRequireDefault(require("./ProductCarousel"));

var _ProductGrid = _interopRequireDefault(require("./ProductGrid"));

var _material = require("@mui/material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductCollection = function ProductCollection(_ref) {
  var handleClick = _ref.handleClick,
      collectionHandle = _ref.collectionHandle,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === void 0 ? 20 : _ref$perPage,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'carousel' : _ref$variant,
      styles = _ref.styles;

  var _useCollections = (0, _useCollections2["default"])(),
      loading = _useCollections.loading,
      collection = _useCollections.collection,
      fetchCollection = _useCollections.fetchCollection,
      products = _useCollections.products;

  (0, _react.useEffect)(function () {
    if (collectionHandle) fetchCollection(collectionHandle, perPage);
  }, [collectionHandle]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, variant == 'carousel' && /*#__PURE__*/_react["default"].createElement(_ProductCarousel["default"], {
    title: collection === null || collection === void 0 ? void 0 : collection.title,
    loading: loading,
    products: products,
    handleClick: handleClick
  }), variant == 'grid' && /*#__PURE__*/_react["default"].createElement(_ProductGrid["default"], {
    title: collection === null || collection === void 0 ? void 0 : collection.title,
    loading: loading,
    products: products,
    handleClick: handleClick
  }));
};

ProductCollection.propTypes = {
  collectionHandle: _propTypes["default"].string.isRequired,
  products: _propTypes["default"].array,
  variant: _propTypes["default"].oneOf(['carousel', 'grid']),
  query: _propTypes["default"].string,
  handleClick: _propTypes["default"].func,
  styles: _propTypes["default"].object
};
var _default = ProductCollection;
exports["default"] = _default;
var sx = {
  root: {}
};