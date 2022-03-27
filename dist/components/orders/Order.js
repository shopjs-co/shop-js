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

var _moment = _interopRequireDefault(require("moment"));

var _excluded = ["styles", "order", "handleClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Order = function Order(_ref) {
  var _order$lineItems, _order$lineItems$edge, _order$lineItems$edge2, _order$lineItems$edge3, _order$lineItems$edge4;

  var styles = _ref.styles,
      order = _ref.order,
      handleClick = _ref.handleClick,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.button,
    onClick: function onClick() {
      return handleClick(order);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    alt: order === null || order === void 0 ? void 0 : order.name,
    layout: "fill",
    src: order === null || order === void 0 ? void 0 : (_order$lineItems = order.lineItems) === null || _order$lineItems === void 0 ? void 0 : (_order$lineItems$edge = _order$lineItems.edges[0]) === null || _order$lineItems$edge === void 0 ? void 0 : (_order$lineItems$edge2 = _order$lineItems$edge.node) === null || _order$lineItems$edge2 === void 0 ? void 0 : (_order$lineItems$edge3 = _order$lineItems$edge2.variant) === null || _order$lineItems$edge3 === void 0 ? void 0 : (_order$lineItems$edge4 = _order$lineItems$edge3.image) === null || _order$lineItems$edge4 === void 0 ? void 0 : _order$lineItems$edge4.src
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    py: 1,
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2"
  }, order === null || order === void 0 ? void 0 : order.name), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, (0, _moment["default"])(order === null || order === void 0 ? void 0 : order.processedAt).format("MM/DD/YYYY")), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, (0, _utils.formatCurrency)(order === null || order === void 0 ? void 0 : order.totalPrice)))));
};

var _default = Order;
exports["default"] = _default;
Order.propTypes = {
  styles: _propTypes["default"].object,
  order: _propTypes["default"].object.isRequired,
  handleClick: _propTypes["default"].func.isRequired
};
var sx = {
  root: {},
  button: {
    p: 0
  }
};