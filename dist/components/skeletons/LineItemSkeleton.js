"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));

var _excluded = ["styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LineItemSkeleton = function LineItemSkeleton(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 1,
    display: "flex",
    flexDirection: "row",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular"
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    variant: "square",
    sx: sx.avatar
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mx: 1,
    height: "180",
    width: '100%',
    justifyContent: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: "80%"
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: "30%",
    height: 14
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    mb: 1
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: "30%",
    height: 14
  }))));
};

LineItemSkeleton.propTypes = {
  styles: _propTypes["default"].object
};
var _default = LineItemSkeleton;
exports["default"] = _default;
var sx = {
  root: {},
  avatar: {
    height: 100,
    width: 100
  },
  thumbnail: {
    mr: 2
  }
};