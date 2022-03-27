"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _CarouselRightArrow = _interopRequireDefault(require("../carousels/CarouselRightArrow"));

var _CarouselLeftArrow = _interopRequireDefault(require("../carousels/CarouselLeftArrow"));

var _Image = _interopRequireDefault(require("../images/Image"));

var _iconsMaterial = require("@mui/icons-material");

var _shopConfig = require("../../shop-config");

var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));

var _excluded = ["images", "loading", "onClick", "itemWidth", "itemHeight", "numSkeletons", "xs", "sm", "md", "lg"],
    _excluded2 = ["onClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ImageCarousel = function ImageCarousel(_ref) {
  var images = _ref.images,
      loading = _ref.loading,
      _onClick2 = _ref.onClick,
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

  var CustomDot = function CustomDot(_ref2) {
    var _onClick = _ref2.onClick,
        rest = _objectWithoutProperties(_ref2, _excluded2);

    var active = rest.active; // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.

    return /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
      sx: sx.dotButton,
      onClick: function onClick() {
        return _onClick();
      },
      size: "large"
    }, /*#__PURE__*/_react["default"].createElement(_iconsMaterial.FiberManualRecord, {
      sx: _objectSpread(_objectSpread({}, sx.dot), active && sx.active)
    }));
  };

  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.mobileCarousel
  }, images && /*#__PURE__*/_react["default"].createElement(_reactMultiCarousel["default"], {
    swipeable: true,
    draggable: true,
    responsive: _objectSpread({}, _shopConfig.responsive),
    infinite: true,
    autoPlay: false,
    keyBoardControl: true,
    slidesToSlide: 1,
    showDots: true,
    customLeftArrow: /*#__PURE__*/_react["default"].createElement(_CarouselLeftArrow["default"], null),
    customRightArrow: /*#__PURE__*/_react["default"].createElement(_CarouselRightArrow["default"], null),
    customDot: /*#__PURE__*/_react["default"].createElement(CustomDot, null)
  }, images.map(function (image, i) {
    return /*#__PURE__*/_react["default"].createElement(_material.Button, {
      sx: sx.button,
      onClick: function onClick() {
        return _onClick2(i);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Image["default"], {
      key: i,
      src: image,
      width: itemWidth,
      height: itemWidth,
      layout: "fill"
    }));
  })));
};

ImageCarousel.propTypes = {
  images: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  handleClick: _propTypes["default"].func,
  xs: _propTypes["default"].number,
  sm: _propTypes["default"].number,
  md: _propTypes["default"].number,
  lg: _propTypes["default"].number
};
var _default = ImageCarousel;
exports["default"] = _default;
var sx = {
  mobileCarousel: {
    width: '100%'
  },
  dotButton: {
    p: 0,
    mt: 0,
    mr: 1,
    mb: 3,
    ml: 0
  },
  dot: {
    height: 16,
    width: 16,
    opacity: 1.0,
    color: 'common.white,'
  },
  active: {
    opacity: 1.0,
    color: 'primary.main'
  },
  button: {
    p: 0
  }
};