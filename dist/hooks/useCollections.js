"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _collections = require("../graphql/collections");

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

var useCollections = function useCollections() {
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
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      products = _useState8[0],
      setProducts = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      collection = _useState10[0],
      setCollection = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      collections = _useState12[0],
      setCollections = _useState12[1];

  var _useLazyQuery = (0, _client.useLazyQuery)(_collections.QUERY_COLLECTION),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      fetchCollectionQuery = _useLazyQuery2[0],
      fetchCollectionResp = _useLazyQuery2[1];

  var _useLazyQuery3 = (0, _client.useLazyQuery)(_collections.QUERY_COLLECTIONS),
      _useLazyQuery4 = _slicedToArray(_useLazyQuery3, 2),
      fetchCollectionsQuery = _useLazyQuery4[0],
      fetchCollectionsResp = _useLazyQuery4[1];

  var fetchCollection = function fetchCollection(handle) {
    var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
    fetchCollectionQuery({
      variables: {
        handle: handle,
        first: perPage
      }
    });
  };

  var fetchCollections = function fetchCollections() {
    var perPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
    fetchCollectionsQuery({
      variables: {
        first: perPage
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (fetchCollectionResp !== null && fetchCollectionResp !== void 0 && fetchCollectionResp.data) {
      var _fetchCollectionResp$, _fetchCollectionResp$2, _fetchCollectionResp$3, _fetchCollectionResp$4, _fetchCollectionResp$5, _fetchCollectionResp$6, _fetchCollectionResp$7;

      setCollection(fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.data);
      setProducts(fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : (_fetchCollectionResp$ = fetchCollectionResp.data) === null || _fetchCollectionResp$ === void 0 ? void 0 : (_fetchCollectionResp$2 = _fetchCollectionResp$.collectionByHandle) === null || _fetchCollectionResp$2 === void 0 ? void 0 : (_fetchCollectionResp$3 = _fetchCollectionResp$2.products) === null || _fetchCollectionResp$3 === void 0 ? void 0 : (_fetchCollectionResp$4 = _fetchCollectionResp$3.edges) === null || _fetchCollectionResp$4 === void 0 ? void 0 : _fetchCollectionResp$4.map(function (e) {
        return e.node;
      }));
      setImage(fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : (_fetchCollectionResp$5 = fetchCollectionResp.data) === null || _fetchCollectionResp$5 === void 0 ? void 0 : (_fetchCollectionResp$6 = _fetchCollectionResp$5.collectionByHandle) === null || _fetchCollectionResp$6 === void 0 ? void 0 : (_fetchCollectionResp$7 = _fetchCollectionResp$6.image) === null || _fetchCollectionResp$7 === void 0 ? void 0 : _fetchCollectionResp$7.originalSrc);
    }
  }, [fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.data]);
  (0, _react.useEffect)(function () {
    if (fetchCollectionsResp !== null && fetchCollectionsResp !== void 0 && fetchCollectionsResp.data) {
      var _fetchCollectionsResp, _fetchCollectionsResp2;

      setCollections(fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : (_fetchCollectionsResp = fetchCollectionsResp.data) === null || _fetchCollectionsResp === void 0 ? void 0 : (_fetchCollectionsResp2 = _fetchCollectionsResp.collections) === null || _fetchCollectionsResp2 === void 0 ? void 0 : _fetchCollectionsResp2.edges.map(function (e) {
        return e.node;
      }));
    }
  }, [fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : fetchCollectionsResp.data]);
  (0, _react.useEffect)(function () {
    setLoading((fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.loading) || (fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : fetchCollectionsResp.loading));
  }, [fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.loading, fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : fetchCollectionsResp.loading]);
  (0, _react.useEffect)(function () {
    setError(_objectSpread(_objectSpread({}, fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.error), fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : fetchCollectionsResp.error));
  }, [fetchCollectionResp === null || fetchCollectionResp === void 0 ? void 0 : fetchCollectionResp.error, fetchCollectionsResp === null || fetchCollectionsResp === void 0 ? void 0 : fetchCollectionsResp.error]);
  return {
    collection: collection,
    collections: collections,
    fetchCollection: fetchCollection,
    fetchCollections: fetchCollections,
    image: image,
    products: products,
    loading: loading,
    error: error
  };
};

var _default = useCollections;
exports["default"] = _default;