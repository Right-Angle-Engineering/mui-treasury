"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@mui/material/colors");

var _default = function _default() {
  return {
    select: {
      minWidth: 200,
      background: 'white',
      color: _colors.deepPurple[500],
      fontWeight: 200,
      borderStyle: 'none',
      borderWidth: 2,
      borderRadius: 12,
      paddingLeft: 24,
      paddingTop: 14,
      paddingBottom: 15,
      boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
      "&:focus": {
        borderRadius: 12,
        background: 'white',
        borderColor: _colors.deepPurple[100]
      }
    },
    icon: {
      color: _colors.deepPurple[300],
      right: 12,
      position: 'absolute',
      userSelect: 'none',
      pointerEvents: 'none'
    },
    paper: {
      borderRadius: 12,
      marginTop: 8
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
      background: 'white',
      "& li": {
        fontWeight: 200,
        paddingTop: 12,
        paddingBottom: 12
      },
      "& li:hover": {
        background: _colors.deepPurple[100]
      },
      "& li.Mui-selected": {
        color: 'white',
        background: _colors.deepPurple[400]
      },
      "& li.Mui-selected:hover": {
        background: _colors.deepPurple[500]
      }
    }
  };
};

exports["default"] = _default;