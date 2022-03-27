"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _excluded = ["option", "selected", "handleChange", "styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SizeSelector = function SizeSelector(_ref) {
  var option = _ref.option,
      selected = _ref.selected,
      handleChange = _ref.handleChange,
      styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_material.Box, {
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, "Select size"), option.values.map(function (value, i) {
    return /*#__PURE__*/React.createElement(_material.Button, {
      key: i,
      sx: _objectSpread(_objectSpread({}, sx.button), selected === value && sx.active),
      color: "primary",
      variant: selected === value ? 'contained' : 'outlined',
      onClick: function onClick() {
        return handleChange("Size", value);
      }
    }, value);
  }));
};

SizeSelector.propTypes = {
  selected: _propTypes["default"].string,
  handleChange: _propTypes["default"].func.isRequired,
  option: _propTypes["default"].object.isRequired,
  className: _propTypes["default"].string
};
var _default = SizeSelector;
exports["default"] = _default;
var sx = {
  root: {},
  active: {},
  button: {
    mt: 1,
    mr: 1,
    mb: 0,
    ml: 0
  }
};