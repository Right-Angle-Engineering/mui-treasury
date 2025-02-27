"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var nikiCategoryMenuStyles = function nikiCategoryMenuStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    title: {
      fontSize: '1rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '0.5em',
      color: palette.text.primary
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: '0.875rem',
      color: palette.text.primary,
      fontWeight: 300,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      '&:hover, &:focus': {
        color: palette.text.secondary
      }
    },
    itemActive: {}
  });
};

var _default = nikiCategoryMenuStyles;
exports["default"] = _default;