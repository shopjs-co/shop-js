"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _Product = _interopRequireDefault(require("./Product"));

var _ProductSkeleton = _interopRequireDefault(require("../skeletons/ProductSkeleton"));

var _excluded = ["products", "loading", "xs", "sm", "md", "lg"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProductGrid = function ProductGrid(_ref) {
  var products = _ref.products,
      loading = _ref.loading,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 6 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 4 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 3 : _ref$lg,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, products && !loading ? products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      key: product.id
    }, /*#__PURE__*/_react["default"].createElement(_Product["default"], {
      product: product
    }));
  }) : _toConsumableArray(Array(12)).map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      key: i
    }, /*#__PURE__*/_react["default"].createElement(_ProductSkeleton["default"], null));
  }));
};

ProductGrid.propTypes = {
  products: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  xs: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  md: _propTypes["default"].number,
  lg: _propTypes["default"].number
};
var _default = ProductGrid;
exports["default"] = _default;