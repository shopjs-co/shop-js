"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _ShopContext = _interopRequireDefault(require("../../context/ShopContext"));

var _useCheckout2 = _interopRequireDefault(require("../../hooks/useCheckout"));

var _CartLineItems = _interopRequireDefault(require("./CartLineItems"));

var _CartLineItemTotals = _interopRequireDefault(require("./CartLineItemTotals"));

var _CheckoutButton = _interopRequireDefault(require("./CheckoutButton"));

var _CartApplyDiscountCode = _interopRequireDefault(require("../discounts/CartApplyDiscountCode"));

var _excluded = ["styles", "title"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Cart = function Cart(_ref) {
  var styles = _ref.styles,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Your Shopping Bag' : _ref$title,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      cartOpen = _useContext.cartOpen,
      toggleOpenCart = _useContext.toggleOpenCart;

  var _useCheckout = (0, _useCheckout2["default"])(),
      checkout = _useCheckout.checkout;

  return /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: cartOpen,
    onClose: toggleOpenCart,
    transitionDuration: 150,
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    px: 2,
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.backButton,
    onClick: toggleOpenCart,
    startIcon: /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ArrowBack, null)
  }, "Continue Shopping"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6",
    sx: sx.title
  }, title), /*#__PURE__*/_react["default"].createElement(_CartLineItems["default"], null), /*#__PURE__*/_react["default"].createElement(_CartApplyDiscountCode["default"], null), /*#__PURE__*/_react["default"].createElement(_CartLineItemTotals["default"], null), /*#__PURE__*/_react["default"].createElement(_CheckoutButton["default"], null)));
};

var _default = Cart;
exports["default"] = _default;
Cart.propTypes = {
  className: _propTypes["default"].string
};
var sx = {
  root: {
    flexGrow: {
      sm: 1,
      md: 'auto'
    },
    width: {
      sm: '100vw',
      md: 400
    }
  },
  backButton: {
    my: 2
  },
  title: {
    m: 0
  }
};