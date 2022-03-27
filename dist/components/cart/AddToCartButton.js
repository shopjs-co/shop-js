"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _hooks = require("hooks");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _ShopContext = _interopRequireDefault(require("../context/ShopContext"));

var _excluded = ["styles", "variant", "isAvailable", "quantity", "selectOptionsRef"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AddToCartButton = function AddToCartButton(_ref) {
  var styles = _ref.styles,
      variant = _ref.variant,
      isAvailable = _ref.isAvailable,
      _ref$quantity = _ref.quantity,
      quantity = _ref$quantity === void 0 ? 1 : _ref$quantity,
      selectOptionsRef = _ref.selectOptionsRef,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useAlerts = (0, _hooks.useAlerts)(),
      showAlertSuccess = _useAlerts.showAlertSuccess,
      showAlertWarning = _useAlerts.showAlertWarning,
      showAlertError = _useAlerts.showAlertError;

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      toggleOpenCart = _useContext.toggleOpenCart;

  var _useCheckout = (0, _hooks.useCheckout)(),
      loading = _useCheckout.loading,
      checkoutLineItemsAdd = _useCheckout.checkoutLineItemsAdd;

  var handleAddToCart = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (variant !== null && variant !== void 0 && variant.id) {
                checkoutLineItemsAdd(variant === null || variant === void 0 ? void 0 : variant.id, quantity);
                setTimeout(function () {
                  return toggleOpenCart();
                }, 500);
              } else {
                selectOptionsRef.current.scrollIntoView({
                  behavior: 'smooth'
                });
                showAlertError("Please make a selection");
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleAddToCart() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    fullWidth: true,
    color: "primary",
    onClick: handleAddToCart,
    sx: _objectSpread(_objectSpread({}, sx.root), styles),
    variant: "contained",
    size: "large",
    startIcon: loading && /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
      size: 20,
      sx: sx.loader
    })
  }, /*#__PURE__*/_react["default"].createElement("span", {
    sx: sx.buttonText
  }, "Add to Bag"));
};

AddToCartButton.propTypes = {
  variant: _propTypes["default"].object,
  quantity: _propTypes["default"].number,
  isAvailable: _propTypes["default"].bool,
  styles: _propTypes["default"].object,
  selectOptionsRef: _propTypes["default"].object
};
var _default = AddToCartButton;
exports["default"] = _default;
var sx = {
  root: {
    minWidth: 160,
    maxWidth: 260,
    height: 54
  },
  buttonText: {},
  loader: {
    color: 'common.white'
  }
};