"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeImage = exports.formatCurrency = void 0;

var resizeImage = function resizeImage(url, height, width) {
  if (!url) return;
  var resizedUrl = url;

  if (url.test(/cdn.shopify.com/)) {
    var extension = url.split('.').pop();
    var filePath = url.split(".".concat(extension))[0];
    resizedSrc = "".concat(filePath, "_").concat(width, "x").concat(height, ".").concat(extension);
  }

  return resizedUrl;
};

exports.resizeImage = resizeImage;

var formatCurrency = function formatCurrency(money) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';
  var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'USD';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(money);
};

exports.formatCurrency = formatCurrency;