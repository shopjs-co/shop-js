"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _OrderLineItem = _interopRequireDefault(require("./OrderLineItem"));

var _LineItemSkeleton = _interopRequireDefault(require("../skeletons/LineItemSkeleton"));

var _utils = require("../../utils");

var _moment = _interopRequireDefault(require("moment"));

var _excluded = ["styles", "order"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OrderDetails = function OrderDetails(_ref) {
  var styles = _ref.styles,
      order = _ref.order,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      lineItems = _useState2[0],
      setLineItems = _useState2[1];

  (0, _react.useEffect)(function () {
    if (order) {
      var _order$lineItems;

      setLineItems(order === null || order === void 0 ? void 0 : (_order$lineItems = order.lineItems) === null || _order$lineItems === void 0 ? void 0 : _order$lineItems.edges.map(function (e) {
        return e.node;
      }));
    }
  }, [order]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: sx.root
  }, lineItems ? lineItems.map(function (lineItem, i) {
    return /*#__PURE__*/_react["default"].createElement(_OrderLineItem["default"], {
      key: i,
      lineItem: lineItem
    });
  }) : _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/_react["default"].createElement(_LineItemSkeleton["default"], {
      key: i
    });
  }), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    py: 1,
    px: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "subtitle1",
    component: "h2"
  }, order === null || order === void 0 ? void 0 : order.name), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, (0, _moment["default"])(order === null || order === void 0 ? void 0 : order.processedAt).format("MM/DD/YYYY")), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    gutterBottom: true,
    variant: "body2",
    color: "textSecondary"
  }, (0, _utils.formatCurrency)(order === null || order === void 0 ? void 0 : order.totalPrice)))));
};

OrderDetails.propTypes = {
  styles: _propTypes["default"].object,
  order: _propTypes["default"].object.isRequired
};
var _default = OrderDetails;
exports["default"] = _default;
var sx = {
  root: {},
  button: {
    p: 0
  }
};