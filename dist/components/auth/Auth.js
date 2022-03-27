"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _AuthSignIn = _interopRequireDefault(require("./AuthSignIn"));

var _AuthSignOut = _interopRequireDefault(require("./AuthSignOut"));

var _AuthRegister = _interopRequireDefault(require("./AuthRegister"));

var _ShopContext = _interopRequireDefault(require("../../context/ShopContext"));

var _iconsMaterial = require("@mui/icons-material");

var _excluded = ["styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Auth = function Auth(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      showSignIn = _useState2[0],
      setShowSignIn = _useState2[1];

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      authOpen = _useContext.authOpen,
      toggleOpenAuth = _useContext.toggleOpenAuth,
      accessToken = _useContext.accessToken,
      setAccessToken = _useContext.setAccessToken,
      setExpiresAt = _useContext.setExpiresAt;

  var handleSignInToggle = function handleSignInToggle() {
    setShowSignIn(!showSignIn);
  }; // Entry point in the app to establish auth


  (0, _react.useEffect)(function () {
    var token = localStorage.getItem('access_token');
    var expiresAt = localStorage.getItem('expires_at');

    if (token) {
      setAccessToken(token);
      setExpiresAt(expiresAt);
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: authOpen,
    onClose: toggleOpenAuth
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    px: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.backButton,
    onClick: toggleOpenAuth,
    startIcon: /*#__PURE__*/_react["default"].createElement(_iconsMaterial.ArrowBack, null)
  }, "Continue Shopping")), !(accessToken !== null && accessToken !== void 0 && accessToken.length) > 0 ? showSignIn ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.signInContainer
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5"
  }, "Sign In"), /*#__PURE__*/_react["default"].createElement(_AuthSignIn["default"], {
    handleToggle: handleSignInToggle
  })) : /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.signInContainer
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5"
  }, "Register"), /*#__PURE__*/_react["default"].createElement(_AuthRegister["default"], {
    handleToggle: handleSignInToggle
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6"
  }, "Welcome back!"), /*#__PURE__*/_react["default"].createElement(_AuthSignOut["default"], null))));
};

var _default = Auth;
exports["default"] = _default;
Auth.propTypes = {
  styles: _propTypes["default"].object
};
var sx = {
  root: {
    width: {
      sm: 400,
      xs: '100vw'
    }
  },
  backButton: {
    my: 2
  },
  title: {
    m: 0
  }
};