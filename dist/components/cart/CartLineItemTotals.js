"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _CartLineItemPrice = _interopRequireDefault(require("./CartLineItemPrice"));

var _useCheckout2 = _interopRequireDefault(require("../../hooks/useCheckout"));

var _excluded = ["styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CartLineItemTotals = function CartLineItemTotals(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useCheckout = (0, _useCheckout2["default"])(),
      checkout = _useCheckout.checkout,
      discountCodes = _useCheckout.discountCodes;

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    width: "100%",
    p: 2
  }, checkout && /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_CartLineItemPrice["default"], {
    label: 'Subtotal',
    value: (0, _utils.formatCurrency)(checkout.subtotalPrice)
  }), discountCodes && discountCodes.map(function (discountCode, i) {
    return /*#__PURE__*/_react["default"].createElement(_CartLineItemPrice["default"], {
      key: i,
      isDiscountCode: true,
      label: "".concat(discountCode.code),
      value: discountCode !== null && discountCode !== void 0 && discountCode.amount ? "-".concat((0, _utils.formatCurrency)(discountCode.amount)) : "-".concat(discountCode.percentage, "%")
    });
  }), /*#__PURE__*/_react["default"].createElement(_CartLineItemPrice["default"], {
    label: 'Tax',
    value: (0, _utils.formatCurrency)(checkout.totalTax)
  }), /*#__PURE__*/_react["default"].createElement(_CartLineItemPrice["default"], {
    label: 'Total',
    value: (0, _utils.formatCurrency)(checkout.totalPrice),
    variant: "h6"
  })));
};

CartLineItemTotals.propTypes = {
  styles: _propTypes["default"].object
};
var _default = CartLineItemTotals;
exports["default"] = _default;
var sx = {
  root: {}
};