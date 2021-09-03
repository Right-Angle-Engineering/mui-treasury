"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var ballSocialLinkStyles = function ballSocialLinkStyles(_ref) {
  var palette = _ref.palette;
  return (0, _styles.createStyles)({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      borderRadius: 40,
      backgroundColor: palette.mode === 'dark' ? palette.background["default"] : palette.action.selected,
      color: palette.text.secondary,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        backgroundColor: palette.mode === 'dark' ? palette.action.focus : palette.action.disabled,
        color: palette.mode === 'dark' ? '#fff' : palette.text.primary
      }
    },
    icon: {}
  });
};

var _default = ballSocialLinkStyles;
exports["default"] = _default;