"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@mui/material/colors");

var _default = function _default(_ref) {
  var palette = _ref.palette;
  return {
    root: {
      borderRadius: 3,
      border: '2px solid',
      borderColor: _colors.blueGrey[200],
      '&:hover:not($disabled)': {
        borderColor: _colors.blueGrey[500]
      },
      '& > svg': {
        color: _colors.blueGrey[300]
      }
    },
    adornedStart: {
      paddingLeft: '0.5rem'
    },
    adornedEnd: {
      paddingRight: '0.5rem'
    },
    focused: {
      borderColor: _colors.blue[700],
      '&:hover:not($disabled)': {
        borderColor: _colors.blue[700]
      }
    },
    error: {
      borderColor: palette.error.main,
      '&:hover:not($disabled)': {
        borderColor: palette.error.main
      }
    },
    input: {
      padding: '0.625rem 0.5rem'
    },
    disabled: {
      borderColor: _colors.blueGrey[300],
      backgroundColor: _colors.blueGrey[100]
    }
  };
};

exports["default"] = _default;