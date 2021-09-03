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
  name: 'CategoryMenu'
});
exports.useDefaultStyles = useDefaultStyles;

function defaultStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return (0, _createStyles["default"])({
    title: {
      marginBottom: '0.5em',
      cursor: 'default',
      fontSize: '1rem',
      color: palette.text.primary,
      letterSpacing: '0.75px'
    },
    item: {
      display: 'block',
      color: palette.text.secondary,
      cursor: 'pointer',
      marginBottom: '0.125rem',
      '&:hover, &:focus': {
        color: palette.text.primary
      }
    },
    itemActive: {
      '&$item': {
        color: palette.text.primary
      }
    }
  });
}