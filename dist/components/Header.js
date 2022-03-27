"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _AuthButton = _interopRequireDefault(require("./auth/AuthButton"));

var _CartButton = _interopRequireDefault(require("./cart/CartButton"));

var _Search = _interopRequireDefault(require("./search/Search"));

var _excluded = ["styles", "handleClick", "logo"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Header = function Header(_ref) {
  var styles = _ref.styles,
      handleClick = _ref.handleClick,
      Logo = _ref.logo,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement(_material.AppBar, {
    color: "inherit",
    position: "static",
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_material.Toolbar, null, /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    smUp: true
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    color: "primary",
    edge: "start",
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Menu, null))), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.container
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, null, /*#__PURE__*/_react["default"].createElement("img", {
    src: Logo,
    style: sx.logo
  }))), /*#__PURE__*/_react["default"].createElement(_material.Hidden, {
    lgDown: true
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    color: "primary",
    onClick: function onClick() {
      return handleClick('/');
    },
    sx: sx.menuButton,
    size: "large"
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.StoreOutlined, null)), /*#__PURE__*/_react["default"].createElement(_AuthButton["default"], null), /*#__PURE__*/_react["default"].createElement(_CartButton["default"], null))));
};

var _default = Header;
exports["default"] = _default;
Header.propTypes = {
  className: _propTypes["default"].string
};
var sx = {
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1
  },
  logo: {
    width: 110
  }
};