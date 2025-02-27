"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULT_VAR = void 0;

var _colors = require("@mui/material/colors");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultLength = 16;
var defaultGutter = 12;
var defaultOutline = "1px solid ".concat(_colors.blueGrey[100]);

var createTipStyle = function createTipStyle() {
  return {
    height: function height(_ref) {
      var _ref$length = _ref.length,
          length = _ref$length === void 0 ? defaultLength : _ref$length;
      return length;
    },
    top: function top(_ref2) {
      var _ref2$length = _ref2.length,
          length = _ref2$length === void 0 ? defaultLength : _ref2$length;
      return -length;
    },
    outline: function outline(_ref3) {
      var _ref3$outline = _ref3.outline,
          _outline = _ref3$outline === void 0 ? defaultOutline : _ref3$outline;

      return _outline;
    }
  };
};

var DEFAULT_VAR = {
  length: defaultLength,
  gap: defaultGutter,
  outline: defaultOutline
};
exports.DEFAULT_VAR = DEFAULT_VAR;

var _default = function _default() {
  return {
    tree: {},
    trunk: {
      lineHeight: 1.4,
      textAlign: 'center',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: function padding(_ref4) {
        var _ref4$gutter = _ref4.gutter,
            gutter = _ref4$gutter === void 0 ? defaultGutter : _ref4$gutter;
        return "0 ".concat(gutter, "px");
      },
      '& > $branches:first-child': {
        '&:before': {
          display: 'none'
        }
      }
    },
    branches: {
      paddingLeft: 0,
      display: 'flex',
      justifyContent: 'center',
      margin: function margin(_ref5) {
        var _ref5$gutter = _ref5.gutter,
            gutter = _ref5$gutter === void 0 ? defaultGutter : _ref5$gutter,
            _ref5$length = _ref5.length,
            length = _ref5$length === void 0 ? defaultLength : _ref5$length;
        return "".concat(length, "px -").concat(gutter, "px 0");
      },
      position: 'relative',
      '&:before': _extends({
        content: '""',
        position: 'absolute',
        left: '50%'
      }, createTipStyle())
    },
    stem: {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
      '&:before': createTipStyle()
    },
    twig: {
      lineHeight: 1.4,
      listStyle: 'none',
      display: 'inline-block',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      padding: function padding(_ref6) {
        var _ref6$gutter = _ref6.gutter,
            gutter = _ref6$gutter === void 0 ? defaultGutter : _ref6$gutter,
            _ref6$length = _ref6.length,
            length = _ref6$length === void 0 ? defaultLength : _ref6$length;
        return "".concat(length, "px ").concat(gutter, "px 0");
      },
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        outline: function outline(_ref7) {
          var _ref7$outline = _ref7.outline,
              _outline2 = _ref7$outline === void 0 ? defaultOutline : _ref7$outline;

          return _outline2;
        },
        top: 0,
        left: 0,
        right: 0
      },
      '&:first-child:before': {
        left: '50%'
      },
      '&:last-child:before': {
        right: '50%'
      },
      '& $stem': {
        '&:before': {
          content: '""',
          position: 'absolute',
          left: '50%'
        }
      }
    }
  };
};

exports["default"] = _default;