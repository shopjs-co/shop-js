"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _material = require("@mui/material");

var _iconsMaterial = require("@mui/icons-material");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(_ref) {
  var open = _ref.open,
      handleClose = _ref.handleClose,
      title = _ref.title,
      subtitle = _ref.subtitle,
      buttons = _ref.actions,
      children = _ref.children,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? 'sm' : _ref$maxWidth;
  return /*#__PURE__*/React.createElement(_material.Dialog, {
    sx: sx.dialog,
    fullWidth: true,
    maxWidth: maxWidth,
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(_material.DialogTitle, {
    sx: sx.title,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "subtitle1"
  }, title)), /*#__PURE__*/React.createElement(_material.Box, null, /*#__PURE__*/React.createElement(_material.IconButton, {
    size: "small",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement(_iconsMaterial.Close, null))))), /*#__PURE__*/React.createElement(_material.DialogContent, null, subtitle && /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1"
  }, subtitle), children), buttons && /*#__PURE__*/React.createElement(_material.DialogActions, null, buttons));
};

Modal.propTypes = {
  handleClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  subtitle: _propTypes["default"].string,
  children: _propTypes["default"].array,
  buttons: _propTypes["default"].array
};
var _default = Modal;
exports["default"] = _default;
var sx = {
  title: {
    mb: 10,
    height: 64,
    fontSize: '18px',
    backgroundColor: 'background.primary'
  }
};