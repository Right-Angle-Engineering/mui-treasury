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
  name: 'SocialLink'
});
exports.useDefaultStyles = useDefaultStyles;

function defaultStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return (0, _createStyles["default"])({
    anchor: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      fontSize: 24,
      padding: 12,
      color: palette.text.secondary,
      '&:not(:first-of-type)': {
        marginLeft: '0.5rem'
      },
      '&:hover, &:focus': {
        color: palette.text.primary
      }
    },
    icon: {}
  });
}