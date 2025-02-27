"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLowerMediaQuery = exports.gapToCss = exports.resolveGap = exports.getThemeCssValue = void 0;

var _styles = require("@mui/material/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseTheme = (0, _styles.createTheme)();

var toCssValue = function toCssValue(value) {
  return typeof value === 'number' ? "".concat(value, "px") : value;
};

var getThemeCssValue = function getThemeCssValue(gap) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseTheme;
  return "calc(".concat(typeof gap === 'number' ? toCssValue(theme.spacing(gap)) : gap, " / 2)");
};

exports.getThemeCssValue = getThemeCssValue;

var resolveGap = function resolveGap(gap) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseTheme;
  return process.env.NODE_ENV === 'test' ? gap : getThemeCssValue(gap, theme);
}; // @ts-ignore


exports.resolveGap = resolveGap;

var gapToCss = function gapToCss(theme) {
  var resolver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : resolveGap;
  return function (gap) {
    if (typeof gap === 'undefined' || gap === null) return undefined;

    if (typeof gap === 'string' || typeof gap === 'number') {
      return resolver(gap, theme);
    }

    return Object.entries(gap).reduce(function (result, current) {
      return _extends(_extends({}, result), {}, _defineProperty({}, current[0], gapToCss(theme, resolver)(current[1])));
    }, {});
  };
};

exports.gapToCss = gapToCss;

var getLowerMediaQuery = function getLowerMediaQuery(_ref, bp) {
  var breakpoints = _ref.breakpoints;

  if (typeof bp === 'string') {
    return breakpoints.down(breakpoints.keys[breakpoints.keys.indexOf(bp)]);
  }

  return breakpoints.down(bp);
};

exports.getLowerMediaQuery = getLowerMediaQuery;