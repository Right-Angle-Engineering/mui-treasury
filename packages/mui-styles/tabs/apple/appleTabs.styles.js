"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabItemStyles = exports.tabsStyles = void 0;

var _styles = require("@mui/material/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsStyles = function tabsStyles(_ref) {
  var palette = _ref.palette,
      breakpoints = _ref.breakpoints;
  return (0, _styles.createStyles)({
    root: {
      backgroundColor: palette.mode === 'light' ? '#eee' : palette.divider,
      borderRadius: 10,
      minHeight: 44
    },
    flexContainer: {
      display: 'inline-flex',
      position: 'relative',
      zIndex: 1
    },
    scroller: _defineProperty({}, breakpoints.up('md'), {
      padding: '0 8px'
    }),
    indicator: {
      top: 3,
      bottom: 3,
      right: 3,
      height: 'auto',
      background: 'none',
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 4,
        right: 4,
        bottom: 0,
        borderRadius: 8,
        backgroundColor: palette.mode === 'light' ? '#fff' : palette.action.selected,
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)'
      }
    }
  });
};

exports.tabsStyles = tabsStyles;

var tabItemStyles = function tabItemStyles(_ref2) {
  var palette = _ref2.palette,
      breakpoints = _ref2.breakpoints;
  return (0, _styles.createStyles)({
    root: _defineProperty({
      '&:hover': {
        opacity: 1
      },
      minHeight: 44,
      minWidth: 96
    }, breakpoints.up('md'), {
      minWidth: 120
    }),
    wrapper: {
      // zIndex: 2,
      // marginTop: spacing(0.5),
      color: palette.text.primary,
      textTransform: 'initial'
    }
  });
};

exports.tabItemStyles = tabItemStyles;