"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultStyles;
exports.useDefaultStyles = void 0;

var _createStyles = _interopRequireDefault(require("@mui/styles/createStyles"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useDefaultStyles = (0, _makeStyles["default"])(defaultStyles, {
  name: 'NavigationMenu'
});
exports.useDefaultStyles = useDefaultStyles;

function defaultStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return (0, _createStyles["default"])({
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
        '&:hover, &:focus': {
          color: palette.text.primary,
          backgroundColor: palette.action.selected
        },
        '&:not(:first-child)': {
          marginLeft: typeof gutter === 'number' ? spacing(gutter) : gutter
        }
      };
    },
    itemActive: {
      '&$item': {
        color: palette.text.primary,
        backgroundColor: palette.action.selected
      }
    }
  });
}