"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _orders = require("graphql/orders");

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

var useOrders = function useOrders() {
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
      order = _useState6[0],
      setOrder = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      orders = _useState8[0],
      setOrders = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      lineItems = _useState10[0],
      setLineItems = _useState10[1];

  var _useLazyQuery = (0, _client.useLazyQuery)(_orders.QUERY_CUSTOMER_ORDERS),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      fetchCustomerOrdersQuery = _useLazyQuery2[0],
      fetchCustomerOrdersResp = _useLazyQuery2[1];

  var fetchCustomerOrder = function fetchCustomerOrder(accessToken) {
    var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var cursor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    fetchCustomerOrdersQuery({
      variables: {
        customerAccessToken: accessToken,
        first: perPage,
        cursor: cursor
      }
    });
  };

  var selectOrder = function selectOrder(order) {
    var _order$lineItems;

    setOrder(order);
    setLineItems(order === null || order === void 0 ? void 0 : (_order$lineItems = order.lineItems) === null || _order$lineItems === void 0 ? void 0 : _order$lineItems.edges.map(function (e) {
      return e.node;
    }));
  };

  var fetchCustomerOrders = function fetchCustomerOrders(accessToken) {
    var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var cursor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    fetchCustomerOrdersQuery({
      variables: {
        customerAccessToken: accessToken,
        first: perPage,
        cursor: cursor
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (fetchCustomerOrdersResp !== null && fetchCustomerOrdersResp !== void 0 && fetchCustomerOrdersResp.data) {
      var _fetchCustomerOrdersR, _fetchCustomerOrdersR2, _fetchCustomerOrdersR3;

      setOrders(fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : (_fetchCustomerOrdersR = fetchCustomerOrdersResp.data) === null || _fetchCustomerOrdersR === void 0 ? void 0 : (_fetchCustomerOrdersR2 = _fetchCustomerOrdersR.customer) === null || _fetchCustomerOrdersR2 === void 0 ? void 0 : (_fetchCustomerOrdersR3 = _fetchCustomerOrdersR2.orders) === null || _fetchCustomerOrdersR3 === void 0 ? void 0 : _fetchCustomerOrdersR3.edges.map(function (e) {
        return e.node;
      }));
    }
  }, [fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : fetchCustomerOrdersResp.data]);
  (0, _react.useEffect)(function () {
    setError(_objectSpread({}, fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : fetchCustomerOrdersResp.error));
  }, [fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : fetchCustomerOrdersResp.error]);
  (0, _react.useEffect)(function () {
    setLoading(fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : fetchCustomerOrdersResp.loading);
  }, [fetchCustomerOrdersResp === null || fetchCustomerOrdersResp === void 0 ? void 0 : fetchCustomerOrdersResp.loading]);
  return {
    order: order,
    orders: orders,
    lineItems: lineItems,
    selectOrder: selectOrder,
    fetchCustomerOrders: fetchCustomerOrders,
    loading: loading,
    error: error
  };
};

var _default = useOrders;
exports["default"] = _default;