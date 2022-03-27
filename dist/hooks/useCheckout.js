"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _client = require("@apollo/client");

var _ShopContext = _interopRequireDefault(require("../context/ShopContext"));

var _checkout = require("../graphql/checkout");

var _discounts = require("../graphql/discounts");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useCheckout = function useCheckout(_ref) {
  var props = _extends({}, _ref);

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      checkout = _useContext.checkout,
      setCheckout = _useContext.setCheckout,
      setLineItemTotal = _useContext.setLineItemTotal;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      discountCodes = _useState6[0],
      setDiscountCodes = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      discountCodeError = _useState8[0],
      setDiscountCodeError = _useState8[1];

  var _useMutation = (0, _client.useMutation)(_checkout.CHECKOUT_CREATE),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      checkoutCreateMutation = _useMutation2[0],
      checkoutCreateResp = _useMutation2[1];

  var _useMutation3 = (0, _client.useMutation)(_checkout.CHECKOUT_LINE_ITEMS_ADD),
      _useMutation4 = _slicedToArray(_useMutation3, 2),
      checkoutLineItemsAddMutation = _useMutation4[0],
      checkoutLineItemsAddResp = _useMutation4[1];

  var _useMutation5 = (0, _client.useMutation)(_checkout.CHECKOUT_LINE_ITEMS_REMOVE),
      _useMutation6 = _slicedToArray(_useMutation5, 2),
      checkoutLineItemsRemoveMutation = _useMutation6[0],
      checkoutLineItemsRemoveResp = _useMutation6[1];

  var _useMutation7 = (0, _client.useMutation)(_discounts.CHECKOUT_DISCOUNT_CODE_APPLY),
      _useMutation8 = _slicedToArray(_useMutation7, 2),
      checkoutDiscountCodeApplyMutation = _useMutation8[0],
      checkoutDiscountCodeApplyResp = _useMutation8[1];

  var _useMutation9 = (0, _client.useMutation)(_discounts.CHECKOUT_DISCOUNT_CODE_REMOVE),
      _useMutation10 = _slicedToArray(_useMutation9, 2),
      checkoutDiscountCodeRemoveMutation = _useMutation10[0],
      checkoutDiscountCodeRemoveResp = _useMutation10[1];

  var _useLazyQuery = (0, _client.useLazyQuery)(_checkout.CHECKOUT_FETCH),
      _useLazyQuery2 = _slicedToArray(_useLazyQuery, 2),
      checkoutFetchQuery = _useLazyQuery2[0],
      checkoutFetchResp = _useLazyQuery2[1];

  var checkoutLineItemsAdd = function checkoutLineItemsAdd(variantId, quantity) {
    checkoutLineItemsAddMutation({
      variables: {
        checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id,
        lineItems: [{
          variantId: variantId,
          quantity: quantity
        }]
      }
    });
  };

  var checkoutLineItemsRemove = function checkoutLineItemsRemove(lineItemId) {
    checkoutLineItemsRemoveMutation({
      variables: {
        checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id,
        lineItemIds: [lineItemId]
      }
    });
  };

  var checkoutDiscountCodeApply = function checkoutDiscountCodeApply(discountCode) {
    checkoutDiscountCodeApplyMutation({
      variables: {
        checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id,
        discountCode: discountCode
      }
    });
  };

  var checkoutDiscountCodeRemove = function checkoutDiscountCodeRemove() {
    checkoutDiscountCodeRemoveMutation({
      variables: {
        checkoutId: checkout === null || checkout === void 0 ? void 0 : checkout.id
      }
    });
  };

  var checkoutFindOrCreate = function checkoutFindOrCreate() {
    var checkoutId = localStorage.getItem('checkout_id');

    if (checkoutId) {
      checkoutFetchQuery({
        variables: {
          id: checkoutId
        }
      });
    } else {
      var variables = {
        input: {}
      };
      checkoutCreateMutation({
        variables: variables
      });
    }
  };

  var updateLineItemTotal = function updateLineItemTotal() {
    if (!(checkout !== null && checkout !== void 0 && checkout.lineItems)) return;
    var total = checkout.lineItems.edges.map(function (_ref2) {
      var li = _ref2.node;
      return li.quantity;
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
    setLineItemTotal(total);
  }; // Set discounts and discount error codes


  (0, _react.useEffect)(function () {
    var _checkout$discountApp;

    if (checkout !== null && checkout !== void 0 && (_checkout$discountApp = checkout.discountApplications) !== null && _checkout$discountApp !== void 0 && _checkout$discountApp.edges) {
      var _checkout$discountApp2;

      var codes = checkout === null || checkout === void 0 ? void 0 : (_checkout$discountApp2 = checkout.discountApplications) === null || _checkout$discountApp2 === void 0 ? void 0 : _checkout$discountApp2.edges.map(function (_ref3) {
        var _discount$value, _discount$value2;

        var discount = _ref3.node;
        return {
          code: discount.code,
          amount: (_discount$value = discount.value) === null || _discount$value === void 0 ? void 0 : _discount$value.amount,
          percentage: (_discount$value2 = discount.value) === null || _discount$value2 === void 0 ? void 0 : _discount$value2.percentage
        };
      });
      setDiscountCodes(codes);
    }
  }, [checkout]);
  (0, _react.useEffect)(function () {
    var _checkoutDiscountCode, _checkoutDiscountCode2;

    if (checkoutDiscountCodeApplyResp !== null && checkoutDiscountCodeApplyResp !== void 0 && (_checkoutDiscountCode = checkoutDiscountCodeApplyResp.data) !== null && _checkoutDiscountCode !== void 0 && (_checkoutDiscountCode2 = _checkoutDiscountCode.checkoutDiscountCodeApplyV2) !== null && _checkoutDiscountCode2 !== void 0 && _checkoutDiscountCode2.checkoutUserErrors) {
      checkoutDiscountCodeApplyResp.data.checkoutDiscountCodeApplyV2.checkoutUserErrors.map(function (err) {
        setDiscountCodeError(err);
      });
    } else {
      setDiscountCodeError();
    }
  }, [checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutFetchResp !== null && checkoutFetchResp !== void 0 && checkoutFetchResp.data) {
      var _checkoutFetchResp$da;

      setCheckout(checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : (_checkoutFetchResp$da = checkoutFetchResp.data) === null || _checkoutFetchResp$da === void 0 ? void 0 : _checkoutFetchResp$da.node);
      setLoading(checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.loading);
      setError(checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.error);
    }
  }, [checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutCreateResp !== null && checkoutCreateResp !== void 0 && checkoutCreateResp.data) {
      var _checkoutCreateResp$d, _checkoutCreateResp$d2, _checkoutCreateResp$d3, _checkoutCreateResp$d4, _checkoutCreateResp$d5;

      localStorage.setItem('checkout_id', checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : (_checkoutCreateResp$d = checkoutCreateResp.data) === null || _checkoutCreateResp$d === void 0 ? void 0 : (_checkoutCreateResp$d2 = _checkoutCreateResp$d.checkoutCreate) === null || _checkoutCreateResp$d2 === void 0 ? void 0 : (_checkoutCreateResp$d3 = _checkoutCreateResp$d2.checkout) === null || _checkoutCreateResp$d3 === void 0 ? void 0 : _checkoutCreateResp$d3.id);
      setCheckout(checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : (_checkoutCreateResp$d4 = checkoutCreateResp.data) === null || _checkoutCreateResp$d4 === void 0 ? void 0 : (_checkoutCreateResp$d5 = _checkoutCreateResp$d4.checkoutCreate) === null || _checkoutCreateResp$d5 === void 0 ? void 0 : _checkoutCreateResp$d5.checkout);
    }
  }, [checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : checkoutCreateResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutLineItemsAddResp !== null && checkoutLineItemsAddResp !== void 0 && checkoutLineItemsAddResp.data) {
      var _checkoutLineItemsAdd, _checkoutLineItemsAdd2;

      setCheckout(checkoutLineItemsAddResp === null || checkoutLineItemsAddResp === void 0 ? void 0 : (_checkoutLineItemsAdd = checkoutLineItemsAddResp.data) === null || _checkoutLineItemsAdd === void 0 ? void 0 : (_checkoutLineItemsAdd2 = _checkoutLineItemsAdd.checkoutLineItemsAdd) === null || _checkoutLineItemsAdd2 === void 0 ? void 0 : _checkoutLineItemsAdd2.checkout);
      setError(checkoutLineItemsAddResp === null || checkoutLineItemsAddResp === void 0 ? void 0 : checkoutLineItemsAddResp.error);
    }
  }, [checkoutLineItemsAddResp === null || checkoutLineItemsAddResp === void 0 ? void 0 : checkoutLineItemsAddResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutLineItemsRemoveResp !== null && checkoutLineItemsRemoveResp !== void 0 && checkoutLineItemsRemoveResp.data) {
      var _checkoutLineItemsRem, _checkoutLineItemsRem2;

      setCheckout(checkoutLineItemsRemoveResp === null || checkoutLineItemsRemoveResp === void 0 ? void 0 : (_checkoutLineItemsRem = checkoutLineItemsRemoveResp.data) === null || _checkoutLineItemsRem === void 0 ? void 0 : (_checkoutLineItemsRem2 = _checkoutLineItemsRem.checkoutLineItemsRemove) === null || _checkoutLineItemsRem2 === void 0 ? void 0 : _checkoutLineItemsRem2.checkout);
      setError(checkoutLineItemsRemoveResp === null || checkoutLineItemsRemoveResp === void 0 ? void 0 : checkoutLineItemsRemoveResp.error);
    }
  }, [checkoutLineItemsRemoveResp === null || checkoutLineItemsRemoveResp === void 0 ? void 0 : checkoutLineItemsRemoveResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutDiscountCodeApplyResp !== null && checkoutDiscountCodeApplyResp !== void 0 && checkoutDiscountCodeApplyResp.data) {
      var _checkoutDiscountCode3, _checkoutDiscountCode4;

      setCheckout(checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : (_checkoutDiscountCode3 = checkoutDiscountCodeApplyResp.data) === null || _checkoutDiscountCode3 === void 0 ? void 0 : (_checkoutDiscountCode4 = _checkoutDiscountCode3.checkoutDiscountCodeApplyV2) === null || _checkoutDiscountCode4 === void 0 ? void 0 : _checkoutDiscountCode4.checkout);
      setError(checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.error);
    }
  }, [checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.data]);
  (0, _react.useEffect)(function () {
    if (checkoutDiscountCodeRemoveResp !== null && checkoutDiscountCodeRemoveResp !== void 0 && checkoutDiscountCodeRemoveResp.data) {
      var _checkoutDiscountCode5, _checkoutDiscountCode6;

      setCheckout(checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : (_checkoutDiscountCode5 = checkoutDiscountCodeRemoveResp.data) === null || _checkoutDiscountCode5 === void 0 ? void 0 : (_checkoutDiscountCode6 = _checkoutDiscountCode5.checkoutDiscountCodeRemove) === null || _checkoutDiscountCode6 === void 0 ? void 0 : _checkoutDiscountCode6.checkout);
      setError(checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.error);
    }
  }, [checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.data]);
  (0, _react.useEffect)(function () {
    if (checkout) {
      updateLineItemTotal();
    }
  }, [checkout]);
  (0, _react.useEffect)(function () {
    checkoutFindOrCreate();
  }, []);
  (0, _react.useEffect)(function () {
    setError(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.error), checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : checkoutCreateResp.error), checkoutLineItemsAdd === null || checkoutLineItemsAdd === void 0 ? void 0 : checkoutLineItemsAdd.error), checkoutLineItemsRemove === null || checkoutLineItemsRemove === void 0 ? void 0 : checkoutLineItemsRemove.error), checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.error), checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.error));
  }, [checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.error, checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : checkoutCreateResp.error, checkoutLineItemsAdd === null || checkoutLineItemsAdd === void 0 ? void 0 : checkoutLineItemsAdd.error, checkoutLineItemsRemove === null || checkoutLineItemsRemove === void 0 ? void 0 : checkoutLineItemsRemove.error, checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.error, checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.error]);
  (0, _react.useEffect)(function () {
    setLoading((checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.loading) || (checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : checkoutCreateResp.loading) || (checkoutLineItemsAddResp === null || checkoutLineItemsAddResp === void 0 ? void 0 : checkoutLineItemsAddResp.loading) || (checkoutLineItemsRemoveResp === null || checkoutLineItemsRemoveResp === void 0 ? void 0 : checkoutLineItemsRemoveResp.loading) || (checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.loading) || (checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.loading));
  }, [checkoutFetchResp === null || checkoutFetchResp === void 0 ? void 0 : checkoutFetchResp.loading, checkoutCreateResp === null || checkoutCreateResp === void 0 ? void 0 : checkoutCreateResp.loading, checkoutLineItemsAddResp === null || checkoutLineItemsAddResp === void 0 ? void 0 : checkoutLineItemsAddResp.loading, checkoutLineItemsRemoveResp === null || checkoutLineItemsRemoveResp === void 0 ? void 0 : checkoutLineItemsRemoveResp.loading, checkoutDiscountCodeApplyResp === null || checkoutDiscountCodeApplyResp === void 0 ? void 0 : checkoutDiscountCodeApplyResp.loading, checkoutDiscountCodeRemoveResp === null || checkoutDiscountCodeRemoveResp === void 0 ? void 0 : checkoutDiscountCodeRemoveResp.loading]);
  return {
    loading: loading,
    error: error,
    checkout: checkout,
    discountCodes: discountCodes,
    discountCodeError: discountCodeError,
    setDiscountCodeError: setDiscountCodeError,
    checkoutLineItemsAdd: checkoutLineItemsAdd,
    checkoutLineItemsRemove: checkoutLineItemsRemove,
    checkoutDiscountCodeApply: checkoutDiscountCodeApply,
    checkoutDiscountCodeRemove: checkoutDiscountCodeRemove
  };
};

var _default = useCheckout;
exports["default"] = _default;