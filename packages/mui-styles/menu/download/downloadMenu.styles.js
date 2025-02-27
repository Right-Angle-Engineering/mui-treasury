"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = require("@mui/material/colors");

var minWidth = 140;

var _default = function _default() {
  return {
    button: {
      minWidth: minWidth,
      background: 'white',
      fontWeight: 500,
      textTransform: 'capitalize',
      borderColor: _colors.blue[500],
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: 4,
      paddingTop: 8,
      paddingBottom: 8,
      "& > span": {
        fontSize: '0.9em'
      }
    },
    downloadIcon: {
      color: _colors.blue[400],
      userSelect: 'none',
      pointerEvents: 'none',
      marginRight: 8
    },
    downIcon: {
      color: _colors.blue[400],
      userSelect: 'none',
      pointerEvents: 'none'
    },
    upIcon: {
      color: _colors.blue[400],
      userSelect: 'none',
      pointerEvents: 'none',
      transform: "rotate(180deg)"
    },
    paper: {
      minWidth: minWidth,
      borderRadius: 4,
      marginTop: 8
    }
  };
};

exports["default"] = _default;