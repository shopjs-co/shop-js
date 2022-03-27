"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["quantity", "handleChange", "small", "styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuantitySelector = function QuantitySelector(_ref) {
  var quantity = _ref.quantity,
      handleChange = _ref.handleChange,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  var addQuantity = function addQuantity() {
    return handleChange(quantity + 1);
  };

  var removeQuantity = function removeQuantity() {
    return handleChange(quantity - 1);
  };

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement(_material.ButtonGroup, {
    sx: _objectSpread(_objectSpread({}, sx.buttonGroup), {}, {
      height: small ? 32 : 54
    })
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: _objectSpread(_objectSpread({}, sx.button), {}, {
      height: small ? 32 : 54,
      minHeight: small ? 32 : 54
    }),
    onClick: removeQuantity
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Remove, {
    sx: sx.icon
  })), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.button,
    onClick: function onClick() {
      return null;
    }
  }, quantity), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.button,
    onClick: addQuantity
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Add, {
    sx: sx.icon
  }))));
};

QuantitySelector.propTypes = {
  quantity: _propTypes["default"].number.isRequired,
  handleChange: _propTypes["default"].func.isRequired,
  styles: _propTypes["default"].object,
  small: _propTypes["default"].bool
};
var _default = QuantitySelector;
exports["default"] = _default;
var sx = {
  root: {
    mr: 1
  },
  icon: {
    fontSize: 16
  },
  buttonGroup: {
    border: function border(theme) {
      return "1px solid ".concat(theme.palette.primary.light);
    }
  },
  button: {
    border: 'none'
  }
};