"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _useProducts2 = _interopRequireDefault(require("../../hooks/useProducts"));

var _ProductCarousel = _interopRequireDefault(require("./ProductCarousel"));

var _ProductGrid = _interopRequireDefault(require("./ProductGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductRecommendations = function ProductRecommendations(_ref) {
  var productId = _ref.productId,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'grid' : _ref$variant,
      styles = _ref.styles;

  var _useProducts = (0, _useProducts2["default"])(),
      loading = _useProducts.loading,
      products = _useProducts.products,
      fetchProductRecommendations = _useProducts.fetchProductRecommendations;

  (0, _react.useEffect)(function () {
    if (productId) fetchProductRecommendations(productId);
  }, [productId]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: "sticky-block-el",
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement("center", null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    sx: sx.title
  }, "You May Also Like")), variant == 'carousel' && /*#__PURE__*/_react["default"].createElement(_ProductCarousel["default"], {
    loading: loading,
    products: products
  }), variant == 'grid' && /*#__PURE__*/_react["default"].createElement(_ProductGrid["default"], {
    loading: loading,
    products: products
  }));
};

ProductRecommendations.propTypes = {
  productId: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['carousel', 'grid']),
  query: _propTypes["default"].string,
  styles: _propTypes["default"].object
};
var _default = ProductRecommendations;
exports["default"] = _default;
var sx = {
  root: {},
  title: {
    m: 2
  }
};