"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default() {
  return {
    overline: {
      display: 'block',
      textAlign: 'center',
      color: '#9e9e9e',
      letterSpacing: '2px',
      fontSize: 14,
      marginTop: 12
    },
    heading: {
      textAlign: 'center',
      fontSize: 32,
      lineHeight: 2,
      fontWeight: 300,
      fontFamily: // eslint-disable-next-line max-len
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      marginBottom: '0.72em',
      '&:after': {
        content: '""',
        width: 24,
        height: 2,
        backgroundColor: '#ddd',
        display: 'block',
        margin: '8px auto',
        borderRadius: 2
      }
    },
    body: {
      textAlign: 'center',
      fontSize: 14,
      color: '#222',
      lineHeight: 1.75,
      width: '88%',
      margin: '0 auto'
    }
  };
};

exports["default"] = _default;