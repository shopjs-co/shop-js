"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@mui/material/styles");

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _shopConfig = require("../shop-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DEFAULT_ITEMS = 2;
var BREAKPOINTS = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

var useResponsive = function useResponsive(_ref) {
  var props = _extends({}, _ref);

  var theme = (0, _styles.useTheme)();

  var _useState = (0, _react.useState)("desktop"),
      _useState2 = _slicedToArray(_useState, 2),
      breakpoint = _useState2[0],
      setBreakpoint = _useState2[1];

  var _useState3 = (0, _react.useState)(BREAKPOINTS.lg),
      _useState4 = _slicedToArray(_useState3, 2),
      breakpointWidth = _useState4[0],
      setBreakpointWidth = _useState4[1];

  var _useState5 = (0, _react.useState)(BREAKPOINTS.lg),
      _useState6 = _slicedToArray(_useState5, 2),
      itemWidth = _useState6[0],
      setItemWidth = _useState6[1];

  var _useState7 = (0, _react.useState)(DEFAULT_ITEMS),
      _useState8 = _slicedToArray(_useState7, 2),
      itemsPerCarousel = _useState8[0],
      setItemsPerCarousel = _useState8[1];

  var isMobile = (0, _useMediaQuery["default"])(theme.breakpoints.down('md'));
  var isTablet = (0, _useMediaQuery["default"])(theme.breakpoints.between('md', 'lg'));
  var isDesktop = (0, _useMediaQuery["default"])(theme.breakpoints.between('lg', 'xl'));
  var isSuperLargeDesktop = (0, _useMediaQuery["default"])(theme.breakpoints.up('lg'));

  var setResponsiveBreakpoint = function setResponsiveBreakpoint() {
    if (isMobile) {
      setBreakpoint("mobile");
      setBreakpointWidth(BREAKPOINTS.sm);
    }

    if (isTablet) {
      setBreakpoint("tablet");
      setBreakpointWidth(BREAKPOINTS.md);
    }

    if (isDesktop) {
      setBreakpoint("desktop");
      setBreakpointWidth(BREAKPOINTS.lg);
    }

    if (isSuperLargeDesktop) {
      setBreakpoint("superLargeDesktop");
      setBreakpointWidth(BREAKPOINTS.xl);
    }
  };

  (0, _react.useEffect)(function () {
    var numItems = _shopConfig.responsive[breakpoint].items || DEFAULT_ITEMS;
    setItemsPerCarousel(numItems);
    setItemWidth(parseInt(breakpointWidth / itemsPerCarousel));
  }, [breakpointWidth, itemsPerCarousel]);
  (0, _react.useLayoutEffect)(function () {
    setResponsiveBreakpoint();
  }, [isMobile, isTablet, isDesktop, isSuperLargeDesktop]);
  return {
    breakpoint: breakpoint,
    itemWidth: itemWidth,
    itemsPerCarousel: itemsPerCarousel,
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
    isSuperLargeDesktop: isSuperLargeDesktop
  };
};

var _default = useResponsive;
exports["default"] = _default;