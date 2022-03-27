"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _SizeSelector = _interopRequireDefault(require("./SizeSelector"));

var _ColorSelector = _interopRequireDefault(require("./ColorSelector"));

var _excluded = ["selectedOptions", "handleChange", "options", "styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var VariantSelector = function VariantSelector(_ref) {
  var selectedOptions = _ref.selectedOptions,
      handleChange = _ref.handleChange,
      options = _ref.options,
      styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  var sizeOption = options.find(function (o) {
    return o.name == 'Size';
  });
  var colorOption = options.find(function (o) {
    return o.name == 'Color';
  });
  var materialOption = options.find(function (o) {
    return o.name == 'Material';
  });
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 2
  }, colorOption && /*#__PURE__*/_react["default"].createElement(_ColorSelector["default"], {
    selected: selectedOptions["Color"],
    handleChange: handleChange,
    option: colorOption
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 2
  }, sizeOption && /*#__PURE__*/_react["default"].createElement(_SizeSelector["default"], {
    selected: selectedOptions["Size"],
    handleChange: handleChange,
    option: sizeOption
  })));
};

VariantSelector.propTypes = {
  selectedOptions: _propTypes["default"].object,
  handleChange: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].object,
  options: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var _default = VariantSelector;
exports["default"] = _default;
var sx = {
  root: {}
};