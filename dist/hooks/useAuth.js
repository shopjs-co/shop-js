"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useAlerts = _interopRequireDefault(require("../../hooks/useAlerts"));

var _client = require("@apollo/client");

var _ShopContext = _interopRequireDefault(require("../context/ShopContext"));

var _auth = require("graphql/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useAuth = function useAuth(_ref) {
  var props = _extends({}, _ref);

  var _useContext = (0, _react.useContext)(_ShopContext["default"]),
      currentUser = _useContext.currentUser,
      setCurrentUser = _useContext.setCurrentUser,
      accessToken = _useContext.accessToken,
      setAccessToken = _useContext.setAccessToken,
      expiresAt = _useContext.expiresAt,
      setExpiresAt = _useContext.setExpiresAt;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useMutation = (0, _client.useMutation)(_auth.MUTATION_SIGN_IN),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      signInMutation = _useMutation2[0],
      signInResp = _useMutation2[1];

  var _useMutation3 = (0, _client.useMutation)(_auth.MUTATION_SIGN_UP),
      _useMutation4 = _slicedToArray(_useMutation3, 2),
      signUpMutation = _useMutation4[0],
      signUpResp = _useMutation4[1];

  var _useMutation5 = (0, _client.useMutation)(_auth.MUTATION_SIGN_OUT),
      _useMutation6 = _slicedToArray(_useMutation5, 2),
      signOutMutation = _useMutation6[0],
      signOutResp = _useMutation6[1];

  var _useMutation7 = (0, _client.useMutation)(_auth.MUTATION_REFRESH_TOKEN),
      _useMutation8 = _slicedToArray(_useMutation7, 2),
      refreshTokenMutation = _useMutation8[0],
      refreshTokenResp = _useMutation8[1];

  var signIn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return signInMutation({
                variables: {
                  input: {
                    email: email,
                    password: password
                  }
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function signIn(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var signUp = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email, password) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return signUpMutation({
                variables: {
                  input: {
                    email: email,
                    password: password
                  }
                }
              });

            case 3:
              _context2.next = 9;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              setError("Creating Customer Limit exceeded. Please try again later.");

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    }));

    return function signUp(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var signOut = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return signOutMutation({
                variables: {
                  customerAccessToken: accessToken
                }
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function signOut() {
      return _ref4.apply(this, arguments);
    };
  }();

  var refreshToken = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return refreshTokenMutation({
                variables: {
                  customerAccessToken: token
                }
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function refreshToken(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (signInResp !== null && signInResp !== void 0 && signInResp.data) {
      var _signInResp$data, _signInResp$data$cust, _signInResp$data$cust2, _signInResp$data2, _signInResp$data2$cus, _signInResp$data2$cus2, _signInResp$data3, _signInResp$data3$cus;

      var token = signInResp === null || signInResp === void 0 ? void 0 : (_signInResp$data = signInResp.data) === null || _signInResp$data === void 0 ? void 0 : (_signInResp$data$cust = _signInResp$data.customerAccessTokenCreate) === null || _signInResp$data$cust === void 0 ? void 0 : (_signInResp$data$cust2 = _signInResp$data$cust.customerAccessToken) === null || _signInResp$data$cust2 === void 0 ? void 0 : _signInResp$data$cust2.accessToken;
      var expires = signInResp === null || signInResp === void 0 ? void 0 : (_signInResp$data2 = signInResp.data) === null || _signInResp$data2 === void 0 ? void 0 : (_signInResp$data2$cus = _signInResp$data2.customerAccessTokenCreate) === null || _signInResp$data2$cus === void 0 ? void 0 : (_signInResp$data2$cus2 = _signInResp$data2$cus.customerAccessToken) === null || _signInResp$data2$cus2 === void 0 ? void 0 : _signInResp$data2$cus2.expiresAt;

      if (token && expires) {
        setAccessToken(token);
        setExpiresAt(expires);
        localStorage.setItem('access_token', token);
        localStorage.setItem('expires_at', expires);
      }

      if (signInResp !== null && signInResp !== void 0 && (_signInResp$data3 = signInResp.data) !== null && _signInResp$data3 !== void 0 && (_signInResp$data3$cus = _signInResp$data3.customerAccessTokenCreate) !== null && _signInResp$data3$cus !== void 0 && _signInResp$data3$cus.customerUserErrors) {
        var _signInResp$data4, _signInResp$data4$cus;

        setError(signInResp === null || signInResp === void 0 ? void 0 : (_signInResp$data4 = signInResp.data) === null || _signInResp$data4 === void 0 ? void 0 : (_signInResp$data4$cus = _signInResp$data4.customerAccessTokenCreate) === null || _signInResp$data4$cus === void 0 ? void 0 : _signInResp$data4$cus.customerUserErrors[0]);
      }
    }
  }, [signInResp === null || signInResp === void 0 ? void 0 : signInResp.data]);
  (0, _react.useEffect)(function () {
    if (signUpResp !== null && signUpResp !== void 0 && signUpResp.data) {
      var _signUpResp$data, _signUpResp$data2, _signUpResp$data2$cus;

      setCurrentUser(signUpResp === null || signUpResp === void 0 ? void 0 : (_signUpResp$data = signUpResp.data) === null || _signUpResp$data === void 0 ? void 0 : _signUpResp$data.customerCreate);

      if (signUpResp !== null && signUpResp !== void 0 && (_signUpResp$data2 = signUpResp.data) !== null && _signUpResp$data2 !== void 0 && (_signUpResp$data2$cus = _signUpResp$data2.customerCreate) !== null && _signUpResp$data2$cus !== void 0 && _signUpResp$data2$cus.customerUserErrors) {
        var _signUpResp$data3, _signUpResp$data3$cus;

        setError(signUpResp === null || signUpResp === void 0 ? void 0 : (_signUpResp$data3 = signUpResp.data) === null || _signUpResp$data3 === void 0 ? void 0 : (_signUpResp$data3$cus = _signUpResp$data3.customerCreate) === null || _signUpResp$data3$cus === void 0 ? void 0 : _signUpResp$data3$cus.customerUserErrors[0]);
      }
    }
  }, [signUpResp === null || signUpResp === void 0 ? void 0 : signUpResp.data]);
  (0, _react.useEffect)(function () {
    if (signOutResp !== null && signOutResp !== void 0 && signOutResp.data) {
      setAccessToken();
      setExpiresAt();
      localStorage.removeItem('access_token');
      localStorage.removeItem('expires_at');
    }
  }, [signOutResp === null || signOutResp === void 0 ? void 0 : signOutResp.data]);
  (0, _react.useEffect)(function () {
    setLoading(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, signInResp === null || signInResp === void 0 ? void 0 : signInResp.error), signUpResp === null || signUpResp === void 0 ? void 0 : signUpResp.error), signOutResp === null || signOutResp === void 0 ? void 0 : signOutResp.error), refreshTokenResp === null || refreshTokenResp === void 0 ? void 0 : refreshTokenResp.error));
  }, [signInResp === null || signInResp === void 0 ? void 0 : signInResp.error, signUpResp === null || signUpResp === void 0 ? void 0 : signUpResp.error, signOutResp === null || signOutResp === void 0 ? void 0 : signOutResp.error, refreshTokenResp === null || refreshTokenResp === void 0 ? void 0 : refreshTokenResp.error]);
  (0, _react.useEffect)(function () {
    setLoading((signInResp === null || signInResp === void 0 ? void 0 : signInResp.loading) || (signUpResp === null || signUpResp === void 0 ? void 0 : signUpResp.loading) || (signOutResp === null || signOutResp === void 0 ? void 0 : signOutResp.loading) || (refreshTokenResp === null || refreshTokenResp === void 0 ? void 0 : refreshTokenResp.loading));
  }, [signInResp === null || signInResp === void 0 ? void 0 : signInResp.loading, signUpResp === null || signUpResp === void 0 ? void 0 : signUpResp.loading, signOutResp === null || signOutResp === void 0 ? void 0 : signOutResp.loading, refreshTokenResp === null || refreshTokenResp === void 0 ? void 0 : refreshTokenResp.loading]);
  return {
    accessToken: accessToken,
    currentUser: currentUser,
    expiresAt: expiresAt,
    data: data,
    loading: loading,
    error: error,
    signIn: signIn,
    signOut: signOut,
    signUp: signUp,
    refreshToken: refreshToken
  };
};

var _default = useAuth;
exports["default"] = _default;