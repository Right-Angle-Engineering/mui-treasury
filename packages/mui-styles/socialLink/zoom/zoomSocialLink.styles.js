"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var zoomSocialLinkStyles = function zoomSocialLinkStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      color: palette.mode === 'dark' ? palette.text.hint : palette.primary.light,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        transform: 'scale(1.3)',
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main
      }
    },
    icon: {}
  });
};

var _default = zoomSocialLinkStyles;
exports["default"] = _default;