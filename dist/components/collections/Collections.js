"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _CollectionCarousel = _interopRequireDefault(require("./CollectionCarousel"));

var _CollectionGrid = _interopRequireDefault(require("./CollectionGrid"));

var _useCollections2 = _interopRequireDefault(require("../../hooks/useCollections"));

var _excluded = ["styles", "handleClick", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collections = function Collections(_ref) {
  var styles = _ref.styles,
      handleClick = _ref.handleClick,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'carousel' : _ref$variant,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useCollections = (0, _useCollections2["default"])(),
      loading = _useCollections.loading,
      collections = _useCollections.collections,
      fetchCollections = _useCollections.fetchCollections;

  (0, _react.useEffect)(function () {
    fetchCollections();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h6"
  }, "Collections"), variant == 'carousel' && /*#__PURE__*/_react["default"].createElement(_CollectionCarousel["default"], {
    loading: loading,
    collections: collections,
    handleClick: handleClick
  }), variant == 'grid' && /*#__PURE__*/_react["default"].createElement(_CollectionGrid["default"], {
    loading: loading,
    collections: collections,
    handleClick: handleClick
  }));
};

Collections.propTypes = {
  styles: _propTypes["default"].object,
  handleClick: _propTypes["default"].func,
  variant: _propTypes["default"].oneOf(['carousel', 'grid'])
};
var _default = Collections;
exports["default"] = _default;
var sx = {
  root: {}
};