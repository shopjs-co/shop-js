"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NextImage = function NextImage(_ref) {
  var src = _ref.src,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 640 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 640 : _ref$height,
      _ref$objectFit = _ref.objectFit,
      objectFit = _ref$objectFit === void 0 ? 'cover' : _ref$objectFit,
      alt = _ref.alt;

  var fastlyLoader = function fastlyLoader(_ref2) {
    var src = _ref2.src,
        width = _ref2.width,
        quality = _ref2.quality;
    var extension = src.split('.').pop();
    var filePath = src.split(".".concat(extension))[0];
    var resizedUrl = "".concat(filePath, "_").concat(width, "x").concat(height, ".").concat(extension);
    return resizedUrl;
  };

  return /*#__PURE__*/_react["default"].createElement("img", {
    src: src,
    alt: alt,
    width: width,
    height: height,
    style: {
      objectFit: objectFit
    }
  });
};

NextImage.propTypes = {
  src: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number,
  alt: _propTypes["default"].string,
  objectFit: _propTypes["default"].string
};
var _default = NextImage;
exports["default"] = _default;