"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var floatNavigationMenuStyles = function floatNavigationMenuStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
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
        color: palette.text.secondary,
        borderRadius: 4,
        padding: spacing(1, 2),
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.2s ease-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          color: palette.mode === 'dark' ? '#fff' : palette.primary.main
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.mode === 'dark' ? '#fff' : palette.primary.main
      }
    }
  });
};

var _default = floatNavigationMenuStyles;
exports["default"] = _default;