"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useResponsive2 = _interopRequireDefault(require("../../hooks/useResponsive"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _CarouselRightArrow = _interopRequireDefault(require("../carousels/CarouselRightArrow"));

var _CarouselLeftArrow = _interopRequireDefault(require("../carousels/CarouselLeftArrow"));

var _Product = _interopRequireDefault(require("./Product"));

var _ProductSkeleton = _interopRequireDefault(require("../skeletons/ProductSkeleton"));

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductCarousel = function ProductCarousel(_ref) {
  var products = _ref.products,
      _ref$swipeable = _ref.swipeable,
      swipeable = _ref$swipeable === void 0 ? true : _ref$swipeable,
      _ref$draggable = _ref.draggable,
      draggable = _ref$draggable === void 0 ? true : _ref$draggable,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
      _ref$showDots = _ref.showDots,
      showDots = _ref$showDots === void 0 ? false : _ref$showDots,
      styles = _ref.styles;

  var _useResponsive = (0, _useResponsive2["default"])(),
      responsive = _useResponsive.responsive,
      itemsPerCarousel = _useResponsive.itemsPerCarousel;

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: _objectSpread(_objectSpread({}, sx.root), styles)
  }, products ? /*#__PURE__*/_react["default"].createElement(_reactMultiCarousel["default"], {
    ssr: true,
    infinite: true,
    keyBoardControl: true,
    swipeable: swipeable,
    draggable: draggable,
    showDots: showDots,
    responsive: responsive,
    autoPlay: autoPlay,
    customLeftArrow: /*#__PURE__*/_react["default"].createElement(_CarouselLeftArrow["default"], null),
    customRightArrow: /*#__PURE__*/_react["default"].createElement(_CarouselRightArrow["default"], null),
    slidesToSlide: itemsPerCarousel
  }, products.map(function (product) {
    return /*#__PURE__*/_react["default"].createElement(_Product["default"], {
      key: product.id,
      product: product,
      handleClick: handleClick
    });
  })) : /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }, _toConsumableArray(Array(itemsPerCarousel)).map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(_ProductSkeleton["default"], {
      key: i,
      sx: sx.item
    });
  })));
};

ProductCarousel.propTypes = {
  products: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  handleClick: _propTypes["default"].func,
  styles: _propTypes["default"].object,
  swipeable: _propTypes["default"].bool,
  draggable: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  showDots: _propTypes["default"].bool
};
var _default = ProductCarousel;
exports["default"] = _default;
var sx = {
  root: {},
  carousel: {
    width: '100%'
  },
  item: {
    p: {
      xs: 'auto',
      sm: 1
    }
  }
};