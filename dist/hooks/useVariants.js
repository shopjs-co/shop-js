"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useVariants = function useVariants(_ref) {
  var product = _ref.product,
      selectedOptions = _ref.selectedOptions;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      variant = _useState2[0],
      setVariant = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      variantImage = _useState4[0],
      setVariantImage = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      productImages = _useState6[0],
      setProductImages = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      price = _useState8[0],
      setPrice = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      compareAtPrice = _useState10[0],
      setCompareAtPrice = _useState10[1];

  var selectVariant = function selectVariant() {
    var selectedVariant = product.productByHandle.variants.edges.find(function (_ref2) {
      var variant = _ref2.node;
      return variant.selectedOptions.every(function (option) {
        return selectedOptions[option.name] == option.value;
      });
    });
    setVariant(selectedVariant === null || selectedVariant === void 0 ? void 0 : selectedVariant.node);
  };

  var findImages = function findImages() {
    var _product$productByHan, _product$productByHan2, _primary2;

    var images = product === null || product === void 0 ? void 0 : (_product$productByHan = product.productByHandle) === null || _product$productByHan === void 0 ? void 0 : (_product$productByHan2 = _product$productByHan.images) === null || _product$productByHan2 === void 0 ? void 0 : _product$productByHan2.edges.map(function (e) {
      return e.node;
    });

    if (!images) {
      setProductImages();
      return;
    }

    ;
    var primary = images[0];

    if (variant) {
      var _primary;

      primary = images.find(function (image) {
        var _variant$image;

        return image.id == (variant === null || variant === void 0 ? void 0 : (_variant$image = variant.image) === null || _variant$image === void 0 ? void 0 : _variant$image.id);
      });
      setVariantImage((_primary = primary) === null || _primary === void 0 ? void 0 : _primary.src);
    }

    setProductImages([(_primary2 = primary) === null || _primary2 === void 0 ? void 0 : _primary2.src].concat(_toConsumableArray(images.map(function (i) {
      return i.src;
    }))).filter(function (i) {
      return i && i;
    }));
  };

  var findPriceRange = function findPriceRange() {
    if (variant) setPrice((0, _utils.formatCurrency)(variant.price));
    if (variant !== null && variant !== void 0 && variant.compareAtPrice) setCompareAtPrice((0, _utils.formatCurrency)(variant.compareAtPrice));
    var priceRange = product.productByHandle.priceRange;
    var minPrice = priceRange.minVariantPrice.amount;
    var maxPrice = priceRange.maxVariantPrice.amount;

    if (minPrice === maxPrice) {
      setPrice((0, _utils.formatCurrency)(minPrice));
    } else {
      setPrice("".concat((0, _utils.formatCurrency)(minPrice), "-").concat((0, _utils.formatCurrency)(maxPrice)));
    }
  };

  (0, _react.useEffect)(function () {
    if (product) {
      findPriceRange();
    }

    findImages();
  }, [product, variant]);
  (0, _react.useEffect)(function () {
    if (product) selectVariant();
  }, [selectedOptions]);
  (0, _react.useEffect)(function () {
    if (product && product.productByHandle.variants.edges.length == 1) {
      setVariant(product.productByHandle.variants.edges[0].node);
    }
  }, [product]);
  return {
    variant: variant,
    price: price,
    compareAtPrice: compareAtPrice,
    variantImage: variantImage,
    productImages: productImages
  };
};

var _default = useVariants;
exports["default"] = _default;