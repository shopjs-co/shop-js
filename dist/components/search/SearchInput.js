"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

var _sx;

var _excluded = ["value", "handleChange", "handleSearch", "handleKeyPress", "handleClear"];

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

function SearchInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      handleSearch = _ref.handleSearch,
      handleKeyPress = _ref.handleKeyPress,
      handleClear = _ref.handleClear,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var onFocus = function onFocus() {
    return setExpanded(true);
  };

  var onBlur = function onBlur() {
    return setExpanded(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: sx.searchIcon
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Search, {
    sx: sx.icon
  })), /*#__PURE__*/_react["default"].createElement(_material.Input, {
    name: "keywords",
    value: value,
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    sx: _objectSpread(_objectSpread({}, sx.searchInput), expanded && sx.active),
    disableUnderline: true,
    autoComplete: "off",
    placeholder: "Search"
  }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    size: "small",
    onClick: handleClear,
    sx: _objectSpread(_objectSpread({}, sx.button), !value && sx.hidden)
  }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.Clear, {
    sx: sx.icon
  })));
}

SearchInput.propTypes = {
  value: _propTypes["default"].string,
  handleChange: _propTypes["default"].func.isRequired,
  handleSearch: _propTypes["default"].func.isRequired,
  handleKeyPress: _propTypes["default"].func,
  handleClear: _propTypes["default"].func
};
var _default = SearchInput;
exports["default"] = _default;
var sx = (_sx = {
  root: {
    height: 42,
    py: 0,
    pr: 1,
    pb: 0,
    pl: 2,
    display: 'flex',
    alignItems: 'center',
    ml: 'auto',
    borderRadius: 21,
    backgroundColor: 'common.input',
    flex: {
      sm: '1 1 auto',
      md: 'auto'
    }
  },
  hidden: {
    visibility: 'hidden'
  },
  searchInput: {
    width: 140,
    flexGrow: 1,
    transition: function transition(theme) {
      return theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      });
    }
  },
  active: {
    width: 200
  },
  icon: {
    color: 'icon'
  },
  searchIcon: {
    mr: 1,
    color: 'icon'
  }
}, _defineProperty(_sx, "icon", {
  height: 20,
  width: 20
}), _defineProperty(_sx, "button", {
  ml: 2,
  display: {
    md: 'none',
    lg: 'block'
  }
}), _sx);