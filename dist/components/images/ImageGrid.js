"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _Image = _interopRequireDefault(require("../images/Image"));

var _ImageSkeleton = _interopRequireDefault(require("../skeletons/ImageSkeleton"));

var _excluded = ["images", "loading", "onClick", "itemWidth", "itemHeight", "numSkeletons", "xs", "sm", "md", "lg"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageGrid = function ImageGrid(_ref) {
  var images = _ref.images,
      loading = _ref.loading,
      _onClick = _ref.onClick,
      _ref$itemWidth = _ref.itemWidth,
      itemWidth = _ref$itemWidth === void 0 ? 500 : _ref$itemWidth,
      _ref$itemHeight = _ref.itemHeight,
      itemHeight = _ref$itemHeight === void 0 ? 500 : _ref$itemHeight,
      _ref$numSkeletons = _ref.numSkeletons,
      numSkeletons = _ref$numSkeletons === void 0 ? 4 : _ref$numSkeletons,
      _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      _ref$sm = _ref.sm,
      sm = _ref$sm === void 0 ? 6 : _ref$sm,
      _ref$md = _ref.md,
      md = _ref$md === void 0 ? 6 : _ref$md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 6 : _ref$lg,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, images ? images.map(function (image, i) {
    return /*#__PURE__*/React.createElement(_material.Grid, {
      item: true,
      key: i,
      xs: i == 0 ? 12 : xs,
      sm: i == 0 ? 12 : sm,
      md: i == 0 ? 12 : md,
      lg: i == 0 ? 12 : lg
    }, /*#__PURE__*/React.createElement(_material.Button, {
      sx: sx.button,
      onClick: function onClick() {
        return _onClick(i);
      }
    }, /*#__PURE__*/React.createElement(_Image["default"], {
      src: image,
      width: i == 0 ? itemWidth * 2 : itemWidth,
      height: i == 0 ? itemWidth * 2 : itemWidth
    })));
  }) : _toConsumableArray(Array(numSkeletons)).map(function (_, i) {
    return /*#__PURE__*/React.createElement(_material.Grid, {
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      key: i
    }, /*#__PURE__*/React.createElement(_ImageSkeleton["default"], null));
  }));
};

ImageGrid.propTypes = {
  images: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  xs: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  md: _propTypes["default"].number,
  lg: _propTypes["default"].number
};
var _default = ImageGrid;
exports["default"] = _default;
var sx = {
  button: {
    p: 0
  }
};