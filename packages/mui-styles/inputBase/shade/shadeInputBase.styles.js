"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@mui/material/colors");

var _default = function _default(_ref) {
  var palette = _ref.palette;
  var color = _colors.yellow[700];
  var error = '#ff6b81';
  return {
    root: {
      backgroundColor: palette.grey[200],
      transition: '0.3s'
    },
    focused: {
      backgroundColor: palette.common.white,
      boxShadow: "0 0 0 2px ".concat(color)
    },
    error: {
      backgroundColor: '#fff0f0',
      '&$focused': {
        boxShadow: "0 0 0 2px ".concat(error)
      }
    },
    disabled: {
      backgroundColor: palette.grey[50]
    },
    input: {
      padding: '1rem'
    }
  };
};

exports["default"] = _default;