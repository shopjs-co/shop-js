"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _useVariants2 = _interopRequireDefault(require("../../hooks/useVariants"));

var _AddToCartButton = _interopRequireDefault(require("../cart/AddToCartButton"));

var _TitleSkeleton = _interopRequireDefault(require("../skeletons/TitleSkeleton"));

var _TextSkeleton = _interopRequireDefault(require("../skeletons/TextSkeleton"));

var _QuantitySelector = _interopRequireDefault(require("../variants/QuantitySelector"));

var _VariantSelector = _interopRequireDefault(require("../variants/VariantSelector"));

var _excluded = ["product"];

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

var ProductDetails = function ProductDetails(_ref) {
  var _product$productByHan2;

  var product = _ref.product,
      props = _objectWithoutProperties(_ref, _excluded);

  var selectOptionsRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      selectedOptions = _useState2[0],
      setSelectedOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      quantity = _useState4[0],
      setQuantity = _useState4[1];

  var _useVariants = (0, _useVariants2["default"])({
    product: product,
    selectedOptions: selectedOptions
  }),
      variant = _useVariants.variant,
      price = _useVariants.price,
      compareAtPrice = _useVariants.compareAtPrice;

  var handleOptionChange = function handleOptionChange(name, value) {
    setSelectedOptions(_objectSpread(_objectSpread({}, selectedOptions), {}, _defineProperty({}, name, value)));
  };

  var handleQuantityChange = function handleQuantityChange(qty) {
    if (qty < 1) qty = 1;
    setQuantity(qty);
  };

  var renderProductDescriptionHtml = function renderProductDescriptionHtml() {
    var _product$productByHan;

    return {
      __html: product === null || product === void 0 ? void 0 : (_product$productByHan = product.productByHandle) === null || _product$productByHan === void 0 ? void 0 : _product$productByHan.descriptionHtml
    };
  };

  (0, _react.useEffect)(function () {
    setQuantity(1);
  }, [product]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    px: 4
  }, product ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    ref: selectOptionsRef
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, product.productByHandle.vendor), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, product.productByHandle.title), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    mt: 1,
    justifyContent: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: sx.price
  }, price), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: sx.compareAtPrice
  }, compareAtPrice)), /*#__PURE__*/_react["default"].createElement(_VariantSelector["default"], {
    handleChange: handleOptionChange,
    selectedOptions: selectedOptions,
    options: product === null || product === void 0 ? void 0 : (_product$productByHan2 = product.productByHandle) === null || _product$productByHan2 === void 0 ? void 0 : _product$productByHan2.options
  })) : /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_TitleSkeleton["default"], null)), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    width: "100%",
    display: "flex",
    sx: sx.addToCart
  }, /*#__PURE__*/_react["default"].createElement(_QuantitySelector["default"], {
    quantity: quantity,
    handleChange: handleQuantityChange
  }), /*#__PURE__*/_react["default"].createElement(_AddToCartButton["default"], {
    selectOptionsRef: selectOptionsRef,
    variant: variant,
    isAvailable: variant ? true : false,
    quantity: quantity
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 2
  }, product ? /*#__PURE__*/_react["default"].createElement(_material.Box, {
    dangerouslySetInnerHTML: renderProductDescriptionHtml()
  }) : /*#__PURE__*/_react["default"].createElement(_TextSkeleton["default"], null)));
};

var _default = ProductDetails;
exports["default"] = _default;
var sx = {
  root: {
    backgroundColor: 'common.white'
  },
  price: {},
  compareAtPrice: {
    textDecoration: 'line-through',
    color: 'text.secondary'
  },
  addToCart: {
    py: 2,
    px: 0,
    bottom: 0,
    left: 0,
    width: {
      sm: '100vw',
      md: 'auto'
    },
    position: {
      sm: 'fixed',
      md: 'static'
    },
    boxShadow: {
      sm: function sm(theme) {
        return "0 0 20px ".concat(theme.palette.background.shadow);
      },
      md: 'none'
    },
    zIndex: function zIndex(theme) {
      return theme.zIndex.modal + 1;
    },
    backgroundColor: {
      sm: 'common.white',
      md: ''
    }
  }
};