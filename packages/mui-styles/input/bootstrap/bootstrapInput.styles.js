"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var palette = _ref.palette,
      transitions = _ref.transitions;
  var white = palette.common.white;
  var inputRadius = 4;
  var borderWidth = 1;
  var inputPadding = '.375rem .75rem';
  var fontFamily = ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(',');
  var borderColor = '#ced4da'; // you can change normal color to primary using
  // palette.primary.main

  var normalColor = '#80bdff';
  var validColor = '#28a745';
  var errorColor = '#dc3545';
  return {
    root: {
      '&.-valid $input': {
        borderColor: "".concat(validColor, " !important"),
        '&:focus': {
          boxShadow: "0 0 0 0.2rem ".concat((0, _color["default"])(validColor).fade(0.75))
        }
      }
    },
    error: {
      '& $input': {
        borderColor: "".concat(errorColor, " !important"),
        '&:focus': {
          boxShadow: "0 0 0 0.2rem ".concat((0, _color["default"])(errorColor).fade(0.75))
        }
      }
    },
    input: {
      boxSizing: 'border-box',
      borderRadius: inputRadius,
      position: 'relative',
      backgroundColor: white,
      borderWidth: borderWidth,
      borderStyle: 'solid',
      borderColor: borderColor,
      fontSize: 16,
      height: 'calc(1.5em + .75rem + 2px)',
      width: 'auto',
      padding: inputPadding,
      lineHeight: 1.5,
      transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      // Use the system font instead of the default Roboto font.
      fontFamily: fontFamily,
      '&:focus': {
        outline: 'none',
        borderRadius: inputRadius,
        borderColor: normalColor,
        boxShadow: "0 0 0 0.2rem ".concat((0, _color["default"])(normalColor).fade(palette.mode === 'dark' ? 0.48 : 0.75))
      }
    }
  };
};

exports["default"] = _default;