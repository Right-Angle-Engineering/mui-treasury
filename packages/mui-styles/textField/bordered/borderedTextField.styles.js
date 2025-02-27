"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderedInputLabelStyles = exports.borderedInputBaseStyles = void 0;

var _colors = require("@mui/material/colors");

var _borderedInputBase = _interopRequireDefault(require("../../inputBase/bordered/borderedInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var borderedInputBaseStyles = function borderedInputBaseStyles(theme) {
  return _extends(_extends({}, (0, _borderedInputBase["default"])(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 22
      }
    }
  });
};

exports.borderedInputBaseStyles = borderedInputBaseStyles;

var borderedInputLabelStyles = function borderedInputLabelStyles() {
  return {
    root: {
      color: _colors.blueGrey[400],
      '&$focused:not($error)': {
        color: _colors.blue[700]
      }
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.9)',
      fontWeight: 500
    }
  };
};

exports.borderedInputLabelStyles = borderedInputLabelStyles;