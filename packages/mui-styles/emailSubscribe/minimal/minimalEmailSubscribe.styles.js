"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var _colors = require("@mui/material/colors");

var minimalEmailSubscribeStyles = function minimalEmailSubscribeStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    form: {
      display: 'flex',
      backgroundColor: palette.mode === 'dark' ? palette.background["default"] : _colors.blueGrey[50],
      position: 'relative',
      minWidth: 256,
      maxWidth: '100%'
    },
    input: {
      border: 'none',
      flex: 1,
      backgroundColor: 'unset',
      padding: '0.5rem 1rem',
      paddingRight: '3rem',
      color: palette.text.primary
    },
    submit: {
      alignSelf: 'stretch',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      padding: '0 0.75rem',
      color: palette.action.active
    }
  });
};

var _default = minimalEmailSubscribeStyles;
exports["default"] = _default;