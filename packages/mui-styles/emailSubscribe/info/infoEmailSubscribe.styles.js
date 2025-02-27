"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var infoEmailSubscribeStyles = function infoEmailSubscribeStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    form: {
      display: 'flex',
      alignItems: 'center',
      minWidth: 296
    },
    input: {
      flex: 1,
      padding: '0.5rem 1rem',
      border: '1px solid',
      borderColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
      borderRadius: '2px 0 0 2px',
      color: palette.text.primary,
      backgroundColor: palette.mode === 'dark' ? 'transparent' : '#fff'
    },
    submit: {
      flexShrink: 0,
      alignSelf: 'stretch',
      borderRadius: '0 2px 2px 0',
      padding: '0.5rem',
      minWidth: 48,
      marginLeft: -1,
      backgroundColor: palette.success.main,
      color: '#fff',
      '&:hover': {
        backgroundColor: palette.success.dark
      }
    }
  });
};

var _default = infoEmailSubscribeStyles;
exports["default"] = _default;