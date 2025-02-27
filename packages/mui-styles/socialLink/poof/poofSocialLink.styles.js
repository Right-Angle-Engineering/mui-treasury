"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

var _styles = require("@mui/material/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var poofSocialLinkStyles = function poofSocialLinkStyles(_ref) {
  var palette = _ref.palette;
  var extraLightPrimary = (0, _color["default"])(palette.primary.main).rotate(-12).lighten(0.4).fade(0.8).toString();
  return (0, _styles.createStyles)({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      borderColor: palette.divider,
      color: palette.text.secondary,
      position: 'relative',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundColor: palette.mode === 'dark' ? palette.action.focus : extraLightPrimary,
        borderRadius: 40,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        transform: 'scale(0)'
      },
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main,
        '&:after': {
          transform: 'scale(1)'
        }
      }
    },
    icon: {
      position: 'relative',
      zIndex: 1
    }
  });
};

var _default = poofSocialLinkStyles;
exports["default"] = _default;