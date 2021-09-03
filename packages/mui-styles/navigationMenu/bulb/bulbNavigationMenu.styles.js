"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemHorzPadding = 3;

var bulbNavigationMenuStyles = function bulbNavigationMenuStyles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
  var activeColor = palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : (0, _color["default"])(palette.primary.main).rotate(-6).lighten(0.4).fade(0.87).toString();
  return (0, _styles.createStyles)({
    menu: {
      display: 'flex',
      overflow: 'auto'
    },
    item: function item(_ref2) {
      var gutter = _ref2.gutter;
      return {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        padding: spacing(1, itemHorzPadding),
        cursor: 'pointer',
        textDecoration: 'none',
        color: palette.mode === 'dark' ? palette.text.secondary : '#121212',
        borderRadius: '8px / 50%',
        '&:hover': {
          backgroundColor: activeColor
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        backgroundColor: activeColor,
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main
      }
    }
  });
};

var _default = bulbNavigationMenuStyles;
exports["default"] = _default;