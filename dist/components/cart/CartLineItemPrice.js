"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useCheckout2 = _interopRequireDefault(require("../../hooks/useCheckout"));

var _material = require("@mui/material");

var _excluded = ["label", "value", "variant", "isDiscountCode", "styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CartLineItemTotals = function CartLineItemTotals(_ref) {
  var label = _ref.label,
      value = _ref.value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'body2' : _ref$variant,
      _ref$isDiscountCode = _ref.isDiscountCode,
      isDiscountCode = _ref$isDiscountCode === void 0 ? false : _ref$isDiscountCode,
      styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useCheckout = (0, _useCheckout2["default"])(),
      loading = _useCheckout.loading,
      checkoutDiscountCodeRemove = _useCheckout.checkoutDiscountCodeRemove;

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    color: "textSecondary"
  }, label)), loading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 20
  }) : /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: variant
  }, isDiscountCode && /*#__PURE__*/_react["default"].createElement(_material.Link, {
    sx: sx.discountCode,
    onClick: checkoutDiscountCodeRemove
  }, "remove"), value));
};

CartLineItemTotals.propTypes = {
  styles: _propTypes["default"].object,
  label: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired,
  isDiscountCode: _propTypes["default"].bool,
  variant: _propTypes["default"].string
};
var _default = CartLineItemTotals;
exports["default"] = _default;
var sx = {
  root: {},
  discountCode: {
    cursor: 'pointer',
    color: 'text.secondary',
    fontSize: 14,
    textDecoration: 'underline',
    fontWeight: 400,
    mr: 1.5
  }
};