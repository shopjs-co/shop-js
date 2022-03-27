"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ShopContext = _interopRequireDefault(require("./ShopContext"));

var _client = require("@apollo/client");

var _excluded = ["children", "shopifyStorefrontToken", "shopifyDomain"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ShopProvider = function ShopProvider(_ref) {
  var children = _ref.children,
      shopifyStorefrontToken = _ref.shopifyStorefrontToken,
      shopifyDomain = _ref.shopifyDomain,
      rest = _objectWithoutProperties(_ref, _excluded);

  var apolloClient = (0, _client.useApollo)({
    shopifyDomain: shopifyDomain,
    shopifyStorefrontToken: shopifyStorefrontToken
  });

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      accessToken = _useState2[0],
      setAccessToken = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      alert = _useState4[0],
      setAlert = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      checkout = _useState6[0],
      setCheckout = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      collections = _useState8[0],
      setCollections = _useState8[1];

  var _useState9 = (0, _react.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      currentUser = _useState10[0],
      setCurrentUser = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      expiresAt = _useState12[0],
      setExpiresAt = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      products = _useState14[0],
      setProducts = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var _useState17 = (0, _react.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      lineItemTotal = _useState18[0],
      setLineItemTotal = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      authOpen = _useState20[0],
      setAuthOpen = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      cartOpen = _useState22[0],
      setCartOpen = _useState22[1];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      menuOpen = _useState24[0],
      setMenuOpen = _useState24[1];

  var toggleOpenAuth = function toggleOpenAuth() {
    return setAuthOpen(!authOpen);
  };

  var toggleOpenCart = function toggleOpenCart() {
    return setCartOpen(!cartOpen);
  };

  var toggleOpenMenu = function toggleOpenMenu() {
    return setMenuOpen(!menuOpen);
  };

  var isLoading = function isLoading() {
    return setLoading(true);
  };

  var isLoaded = function isLoaded() {
    return setLoading(false);
  };

  var value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    alert: alert,
    setAlert: setAlert,
    expiresAt: expiresAt,
    setExpiresAt: setExpiresAt,
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    loading: loading,
    isLoading: isLoading,
    isLoaded: isLoaded,
    authOpen: authOpen,
    toggleOpenAuth: toggleOpenAuth,
    cartOpen: cartOpen,
    toggleOpenCart: toggleOpenCart,
    menuOpen: menuOpen,
    toggleOpenMenu: toggleOpenMenu,
    checkout: checkout,
    setCheckout: setCheckout,
    lineItemTotal: lineItemTotal,
    setLineItemTotal: setLineItemTotal,
    shopifyDomain: shopifyDomain,
    shopifyStorefrontToken: shopifyStorefrontToken,
    products: products,
    setProducts: setProducts,
    collections: collections,
    setCollections: setCollections
  };
  return /*#__PURE__*/_react["default"].createElement(_ShopContext["default"].Provider, {
    value: value
  }, /*#__PURE__*/_react["default"].createElement(_client.ApolloProvider, {
    client: apolloClient
  }, children));
};

var _default = ShopProvider;
exports["default"] = _default;