"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CarouselRightArrow = function CarouselRightArrow(_ref) {
  var onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    variant: "contained",
    sx: sx.button,
    onClick: onClick,
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ChevronRight, {
    sx: sx.icon
  }));
};

var _default = CarouselRightArrow;
exports["default"] = _default;
var sx = {
  icon: {
    height: 32,
    width: 32
  },
  button: {
    '&': {
      backgroundColor: 'common.white',
      position: 'absolute',
      right: 20
    }
  }
};