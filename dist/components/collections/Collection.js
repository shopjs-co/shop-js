"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _Image = _interopRequireDefault(require("../images/Image"));

var _constants = require("../../utils/constants");

var _excluded = ["styles", "collection", "handleClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collection = function Collection(_ref) {
  var _collection$image;

  var styles = _ref.styles,
      collection = _ref.collection,
      handleClick = _ref.handleClick,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: sx.button,
    onClick: handleClick ? function () {
      return handleClick(collection);
    } : null
  }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
    layout: "fill",
    src: (collection === null || collection === void 0 ? void 0 : (_collection$image = collection.image) === null || _collection$image === void 0 ? void 0 : _collection$image.originalSrc) || _constants.EMPTY_IMAGE_URL,
    alt: collection.title
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    py: 2,
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2"
  }, collection.title.length > 80 ? collection.title.slice(0, 80) + '...' : collection.title)));
};

Collection.propTypes = {
  styles: _propTypes["default"].object,
  handleClick: _propTypes["default"].func,
  collection: _propTypes["default"].object.isRequired
};
var _default = Collection;
exports["default"] = _default;
var sx = {
  root: {},
  button: {
    p: 0
  }
};