"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHECKOUT_DISCOUNT_CODE_REMOVE = exports.CHECKOUT_DISCOUNT_CODE_APPLY = void 0;

var _client = require("@apollo/client");

var _checkout = require("./checkout");

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CHECKOUT_DISCOUNT_CODE_APPLY = (0, _client.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  mutation checkoutDiscountCodeApply($checkoutId: ID!, $discountCode: String!){\n    checkoutDiscountCodeApplyV2(discountCode: $discountCode, checkoutId: $checkoutId) {\n      checkout {\n        ...CheckoutFragment\n      }\n      checkoutUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n  ", "\n"])), _checkout.CheckoutFragment);
exports.CHECKOUT_DISCOUNT_CODE_APPLY = CHECKOUT_DISCOUNT_CODE_APPLY;
var CHECKOUT_DISCOUNT_CODE_REMOVE = (0, _client.gql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  mutation checkoutDiscountCodeRemove($checkoutId: ID!){\n    checkoutDiscountCodeRemove(checkoutId: $checkoutId) {\n      checkout {\n        ...CheckoutFragment\n      }\n      checkoutUserErrors {\n        code\n        field\n        message\n      }\n    }\n  }\n  ", "\n"])), _checkout.CheckoutFragment);
exports.CHECKOUT_DISCOUNT_CODE_REMOVE = CHECKOUT_DISCOUNT_CODE_REMOVE;