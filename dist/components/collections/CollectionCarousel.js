"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useResponsive2 = _interopRequireDefault(require("../../hooks/useResponsive"));

var _material = require("@mui/material");

var _CarouselRightArrow = _interopRequireDefault(require("../carousels/CarouselRightArrow"));

var _CarouselLeftArrow = _interopRequireDefault(require("../carousels/CarouselLeftArrow"));

var _Collection = _interopRequireDefault(require("./Collection"));

var _CollectionSkeleton = _interopRequireDefault(require("../skeletons/CollectionSkeleton"));

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

var _shopConfig = require("../../shop-config");

var _excluded = ["collections", "loading", "autoPlay", "swipeable", "draggable", "showDots", "perPage"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollectionCarousel = function CollectionCarousel(_ref) {
  var collections = _ref.collections,
      loading = _ref.loading,
      _ref$autoPlay = _ref.autoPlay,
      autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
      _ref$swipeable = _ref.swipeable,
      swipeable = _ref$swipeable === void 0 ? false : _ref$swipeable,
      _ref$draggable = _ref.draggable,
      draggable = _ref$draggable === void 0 ? false : _ref$draggable,
      _ref$showDots = _ref.showDots,
      showDots = _ref$showDots === void 0 ? false : _ref$showDots,
      _ref$perPage = _ref.perPage,
      perPage = _ref$perPage === void 0 ? 20 : _ref$perPage,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useResponsive = (0, _useResponsive2["default"])(),
      itemsPerCarousel = _useResponsive.itemsPerCarousel;

  return /*#__PURE__*/React.createElement(_material.Box, {
    sx: sx.root
  }, collections ? /*#__PURE__*/React.createElement(_reactMultiCarousel["default"], {
    swipeable: swipeable,
    draggable: draggable,
    showDots: showDots,
    responsive: _shopConfig.responsive,
    ssr: true,
    infinite: true,
    autoPlay: autoPlay,
    keyBoardControl: true,
    transitionDuration: 500,
    slidesToSlide: itemsPerCarousel,
    itemClass: 'carousel-item',
    customLeftArrow: /*#__PURE__*/React.createElement(_CarouselLeftArrow["default"], null),
    customRightArrow: /*#__PURE__*/React.createElement(_CarouselRightArrow["default"], null)
  }, collections.map(function (collection) {
    return /*#__PURE__*/React.createElement(_Collection["default"], {
      key: collection.id,
      collection: collection
    });
  })) : /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }, _toConsumableArray(Array(itemsPerCarousel)).map(function (_, i) {
    return /*#__PURE__*/React.createElement(_CollectionSkeleton["default"], {
      key: i,
      sx: sx.item
    });
  })));
};

CollectionCarousel.propTypes = {
  collections: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  styles: _propTypes["default"].object,
  autoPlay: _propTypes["default"].bool,
  swipeable: _propTypes["default"].bool,
  draggable: _propTypes["default"].bool,
  showDots: _propTypes["default"].bool
};
var _default = CollectionCarousel;
exports["default"] = _default;
var sx = {
  root: {}
};