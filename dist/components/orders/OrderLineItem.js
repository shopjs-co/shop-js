"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _sx;

var _excluded = ["styles", "lineItem"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OrderLineItem = function OrderLineItem(_ref) {
  var _lineItem$variant, _lineItem$variant$ima, _lineItem$variant2, _lineItem$variant3;

  var styles = _ref.styles,
      lineItem = _ref.lineItem,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    button: true,
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemIcon, {
    sx: sx.thumbnail
  }, /*#__PURE__*/_react["default"].createElement(_material.Badge, {
    badgeContent: lineItem.quantity,
    color: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    sx: sx.avatar,
    variant: "square",
    src: (0, _utils.resizeImage)(lineItem === null || lineItem === void 0 ? void 0 : (_lineItem$variant = lineItem.variant) === null || _lineItem$variant === void 0 ? void 0 : (_lineItem$variant$ima = _lineItem$variant.image) === null || _lineItem$variant$ima === void 0 ? void 0 : _lineItem$variant$ima.src, 100, 100)
  }))), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    primary: lineItem.title,
    secondary: /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body2"
    }, lineItem === null || lineItem === void 0 ? void 0 : (_lineItem$variant2 = lineItem.variant) === null || _lineItem$variant2 === void 0 ? void 0 : _lineItem$variant2.title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body2"
    }, (0, _utils.formatCurrency)(lineItem === null || lineItem === void 0 ? void 0 : (_lineItem$variant3 = lineItem.variant) === null || _lineItem$variant3 === void 0 ? void 0 : _lineItem$variant3.price)))
  }));
};

OrderLineItem.propTypes = {
  styles: _propTypes["default"].object,
  lineItem: _propTypes["default"].object.isRequired
};
var _default = OrderLineItem;
exports["default"] = _default;
var sx = (_sx = {
  root: {},
  thumbnail: {
    mr: 2
  },
  avatar: {
    height: 100,
    width: 100
  }
}, _defineProperty(_sx, "thumbnail", {
  mr: 2
}), _defineProperty(_sx, "lineItem", {}), _defineProperty(_sx, "loader", {}), _defineProperty(_sx, "removeIcon", {
  fontSize: 20,
  color: 'text.secondary'
}), _sx);