"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var moonSocialLinkStyles = function moonSocialLinkStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      borderRadius: 40,
      border: '1px solid',
      borderColor: palette.divider,
      color: palette.text.secondary,
      transition: '0.3s ease-out',
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        transform: 'translateY(-4px)',
        borderColor: palette.text.secondary,
        color: palette.mode === 'dark' ? '#fff' : palette.text.primary
      }
    },
    icon: {}
  });
};

var _default = moonSocialLinkStyles;
exports["default"] = _default;