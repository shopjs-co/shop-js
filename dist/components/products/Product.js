"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _Image = _interopRequireDefault(require("../images/Image"));

var _utils = require("../../utils");

var _constants = require("../../utils/constants");

var _excluded = ["styles", "product", "handleClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Product = function Product(_ref) {
  var _product$images, _product$images$edges, _product$images$edges2, _product$priceRange$m;

  var styles = _ref.styles,
      product = _ref.product,
      handleClick = _ref.handleClick,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.button,
    onClick: handleClick ? function () {
      return handleClick(collection);
    } : null
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    alt: product.title,
    layout: "fill",
    src: (product === null || product === void 0 ? void 0 : (_product$images = product.images) === null || _product$images === void 0 ? void 0 : (_product$images$edges = _product$images.edges[0]) === null || _product$images$edges === void 0 ? void 0 : (_product$images$edges2 = _product$images$edges.node) === null || _product$images$edges2 === void 0 ? void 0 : _product$images$edges2.src) || _constants.EMPTY_IMAGE_URL
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    py: 1,
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2"
  }, product.title.length > 80 ? product.title.slice(0, 80) + '...' : product.title), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, product.vendor), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, (0, _utils.formatCurrency)((_product$priceRange$m = product.priceRange.minVariantPrice) === null || _product$priceRange$m === void 0 ? void 0 : _product$priceRange$m.amount)))));
};

var _default = Product;
exports["default"] = _default;
Product.propTypes = {
  styles: _propTypes["default"].object,
  handleClick: _propTypes["default"].func,
  product: _propTypes["default"].object.isRequired
};
var sx = {
  root: {},
  button: {
    p: 0
  }
};