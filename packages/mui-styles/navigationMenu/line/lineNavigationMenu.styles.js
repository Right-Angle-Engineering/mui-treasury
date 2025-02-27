"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var itemHorzPadding = 2;

var lineNavigationMenuStyles = function lineNavigationMenuStyles(_ref) {
  var spacing = _ref.spacing,
      palette = _ref.palette;
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
        borderRadius: 4,
        padding: spacing(1, itemHorzPadding),
        cursor: 'pointer',
        textDecoration: 'none',
        transition: '0.2s ease-out',
        color: palette.text.secondary,
        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          left: spacing(itemHorzPadding),
          width: "calc(100% - ".concat(spacing(itemHorzPadding * 2), "px)"),
          height: 3,
          transform: 'scale(0, 1)',
          transition: '0.2s ease-out',
          opacity: 0,
          backgroundColor: palette.primary.light
        },
        '&:hover': {
          color: palette.mode === 'dark' ? palette.primary.light : palette.primary.main,
          '&:after': {
            opacity: 1,
            transform: 'scale(1, 1)'
          }
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.mode === 'dark' ? palette.primary.light : palette.primary.main,
        '&:after': {
          opacity: 1,
          transform: 'scale(1, 1)',
          backgroundColor: palette.mode === 'dark' ? palette.primary.light : palette.primary.main
        }
      }
    }
  });
};

var _default = lineNavigationMenuStyles;
exports["default"] = _default;