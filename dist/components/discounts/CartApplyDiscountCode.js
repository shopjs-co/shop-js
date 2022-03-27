"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _useCheckout2 = _interopRequireDefault(require("../../hooks/useCheckout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CartApplyDiscountCode = function CartApplyDiscountCode(_ref) {
  var props = _extends({}, _ref);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      discountCode = _useState2[0],
      setDiscountCode = _useState2[1];

  var _useCheckout = (0, _useCheckout2["default"])(),
      loading = _useCheckout.loading,
      discountCodeError = _useCheckout.discountCodeError,
      setDiscountCodeError = _useCheckout.setDiscountCodeError,
      checkoutDiscountCodeApply = _useCheckout.checkoutDiscountCodeApply;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((discountCode === null || discountCode === void 0 ? void 0 : discountCode.length) > 0)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return checkoutDiscountCodeApply(discountCode);

            case 3:
              _context.next = 6;
              break;

            case 5:
              setDiscountCodeError({
                message: 'Discount code is required to apply it',
                code: 'DISCOUNT_EMPTY'
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    return setDiscountCode(e.target.value);
  };

  var handleKeyPress = function handleKeyPress(e) {
    if (e.nativeEvent.key == "Enter" && discountCode) {
      handleSubmit();
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_material.Box, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    my: 1,
    display: "flex",
    sx: sx.root
  }, /*#__PURE__*/_react["default"].createElement(_material.Input, {
    value: discountCode,
    onChange: handleChange,
    onKeyPress: handleKeyPress,
    placeholder: "Discount code",
    sx: sx.input,
    disableUnderline: true,
    autoComplete: "off"
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    size: "small",
    onClick: handleSubmit,
    color: "primary",
    sx: sx.button
  }, loading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
    size: 20
  }) : "APPLY")), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: sx.errorText
  }, discountCodeError === null || discountCodeError === void 0 ? void 0 : discountCodeError.message));
};

CartApplyDiscountCode.propTypes = {};
var _default = CartApplyDiscountCode;
exports["default"] = _default;
var sx = {
  root: {
    borderRadius: 8,
    backgroundColor: 'common.input'
  },
  input: {
    height: 52,
    pl: 2,
    flexGrow: 1
  },
  icon: {
    height: 20,
    width: 20,
    transition: function transition(theme) {
      return theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen
      });
    }
  },
  rotate: {
    transform: 'rotate(90deg)'
  },
  button: {
    ml: 2
  },
  errorText: {
    m: 1,
    color: 'common.error'
  }
};