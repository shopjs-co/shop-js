"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _products = require("../graphql/products");

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

var useProducts = function useProducts() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      images = _useState6[0],
      setImages = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      product = _useState8[0],
      setProduct = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      products = _useState10[0],
      setProducts = _useState10[1];

  var _useLazyQuery = (0, _client.useLazyQuery)(_products.QUERY_PRODUCT),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      fetchProductQuery = _useLazyQuery2[0],
      fetchProductResp = _useLazyQuery2[1];

  var _useLazyQuery3 = (0, _client.useLazyQuery)(_products.QUERY_PRODUCTS),
      _useLazyQuery4 = _slicedToArray(_useLazyQuery3, 2),
      fetchProductsQuery = _useLazyQuery4[0],
      fetchProductsResp = _useLazyQuery4[1];

  var _useLazyQuery5 = (0, _client.useLazyQuery)(_products.QUERY_PRODUCT_RECOMMENDATIONS),
      _useLazyQuery6 = _slicedToArray(_useLazyQuery5, 2),
      fetchProductRecommendationsQuery = _useLazyQuery6[0],
      fetchProductRecommendationsResp = _useLazyQuery6[1];

  var fetchProduct = function fetchProduct(handle) {
    fetchProductQuery({
      variables: {
        handle: handle
      }
    });
  };

  var fetchProducts = function fetchProducts(query, perPage) {
    fetchProductsQuery({
      variables: {
        query: query,
        first: perPage
      }
    });
  };

  var fetchProductRecommendations = function fetchProductRecommendations(productId) {
    fetchProductRecommendationsQuery({
      variables: {
        productId: productId
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (fetchProductResp !== null && fetchProductResp !== void 0 && fetchProductResp.data) {
      var _fetchProductResp$dat, _fetchProductResp$dat2, _fetchProductResp$dat3;

      setProduct(fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.data);
      setImages(fetchProductResp === null || fetchProductResp === void 0 ? void 0 : (_fetchProductResp$dat = fetchProductResp.data) === null || _fetchProductResp$dat === void 0 ? void 0 : (_fetchProductResp$dat2 = _fetchProductResp$dat.productByHandle) === null || _fetchProductResp$dat2 === void 0 ? void 0 : (_fetchProductResp$dat3 = _fetchProductResp$dat2.images) === null || _fetchProductResp$dat3 === void 0 ? void 0 : _fetchProductResp$dat3.edges.map(function (e) {
        return e.node.src;
      }));
    }
  }, [fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.data]);
  (0, _react.useEffect)(function () {
    if (fetchProductsResp !== null && fetchProductsResp !== void 0 && fetchProductsResp.data) {
      var _fetchProductsResp$da, _fetchProductsResp$da2;

      setProducts(fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : (_fetchProductsResp$da = fetchProductsResp.data) === null || _fetchProductsResp$da === void 0 ? void 0 : (_fetchProductsResp$da2 = _fetchProductsResp$da.products) === null || _fetchProductsResp$da2 === void 0 ? void 0 : _fetchProductsResp$da2.edges.map(function (e) {
        return e.node;
      }));
    }
  }, [fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : fetchProductsResp.data]);
  (0, _react.useEffect)(function () {
    if (fetchProductRecommendationsResp !== null && fetchProductRecommendationsResp !== void 0 && fetchProductRecommendationsResp.data) {
      var _fetchProductRecommen;

      setProducts(fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : (_fetchProductRecommen = fetchProductRecommendationsResp.data) === null || _fetchProductRecommen === void 0 ? void 0 : _fetchProductRecommen.productRecommendations);
    }
  }, [fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : fetchProductRecommendationsResp.data]);
  (0, _react.useEffect)(function () {
    setError(_objectSpread(_objectSpread(_objectSpread({}, fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.error), fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : fetchProductsResp.error), fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : fetchProductRecommendationsResp.error));
  }, [fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.error, fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : fetchProductsResp.error, fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : fetchProductRecommendationsResp.error]);
  (0, _react.useEffect)(function () {
    setLoading((fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.loading) || (fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : fetchProductsResp.loading) || (fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : fetchProductRecommendationsResp.loading));
  }, [fetchProductResp === null || fetchProductResp === void 0 ? void 0 : fetchProductResp.loading, fetchProductsResp === null || fetchProductsResp === void 0 ? void 0 : fetchProductsResp.loading, fetchProductRecommendationsResp === null || fetchProductRecommendationsResp === void 0 ? void 0 : fetchProductRecommendationsResp.loading]);
  return {
    images: images,
    product: product,
    products: products,
    fetchProduct: fetchProduct,
    fetchProducts: fetchProducts,
    fetchProductRecommendations: fetchProductRecommendations,
    loading: loading,
    error: error
  };
};

var _default = useProducts;
exports["default"] = _default;