"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useAlerts2 = _interopRequireDefault(require("../hooks/useAlerts"));

var _useAuth2 = _interopRequireDefault(require("../hooks/useAuth"));

var _ShopContext = _interopRequireDefault(require("../context/ShopContext"));

var _material = require("@mui/material");

var _excluded = ["handleToggle"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AuthSignIn = function AuthSignIn(_ref) {
  var handleToggle = _ref.handleToggle,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useAlerts = (0, _useAlerts2["default"])(),
      showAlertSuccess = _useAlerts.showAlertSuccess,
      showAlertError = _useAlerts.showAlertError;

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      accessToken = _useContext.accessToken,
      setAccessToken = _useContext.setAccessToken,
      setExpiresAt = _useContext.setExpiresAt;

  var _useAuth = (0, _useAuth2["default"])(),
      signOut = _useAuth.signOut;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var handleSignOut = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((accessToken === null || accessToken === void 0 ? void 0 : accessToken.length) > 1)) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return signOut(accessToken);

            case 3:
              setAccessToken();
              setExpiresAt();
              showAlertSuccess("You have been signed out!");
              _context.next = 9;
              break;

            case 8:
              showAlertError("You are already logged out");

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSignOut() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(_material.Box, {
    my: 2,
    display: "flex",
    flexDirection: "column",
    width: "100%"
  }, /*#__PURE__*/React.createElement(_material.Button, {
    sx: sx.button,
    fullWidth: true,
    size: "large",
    color: "primary",
    variant: "contained",
    onClick: handleSignOut
  }, "Sign Out"));
};

AuthSignIn.propTypes = {
  handleToggle: _propTypes["default"].func.isRequired
};
var _default = AuthSignIn;
exports["default"] = _default;
var sx = {
  root: {},
  button: {
    py: 2,
    px: 3
  }
};