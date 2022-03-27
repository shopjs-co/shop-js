"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _CollectionCarousel = _interopRequireDefault(require("./CollectionCarousel"));

var _CollectionGrid = _interopRequireDefault(require("./CollectionGrid"));

var _useCollections2 = _interopRequireDefault(require("../../hooks/useCollections"));

var _excluded = ["styles", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collections = function Collections(_ref) {
  var styles = _ref.styles,
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
  return /*#__PURE__*/React.createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "h6"
  }, "Collections"), variant == 'carousel' && /*#__PURE__*/React.createElement(_CollectionCarousel["default"], {
    loading: loading,
    collections: collections
  }), variant == 'grid' && /*#__PURE__*/React.createElement(_CollectionGrid["default"], {
    loading: loading,
    collections: collections
  }));
};

Collections.propTypes = {
  styles: _propTypes["default"].object,
  variant: _propTypes["default"].oneOf(['carousel', 'grid'])
};
var _default = Collections;
exports["default"] = _default;
var sx = {
  root: {}
};