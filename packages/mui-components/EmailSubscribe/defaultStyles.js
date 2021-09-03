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
  name: 'EmailSubscribe'
});
exports.useDefaultStyles = useDefaultStyles;

function defaultStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return (0, _createStyles["default"])({
    form: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 4,
      '&:focus-within': {
        boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)'
      }
    },
    input: {
      backgroundColor: palette.background.paper,
      minWidth: 256,
      flex: 1,
      alignSelf: 'stretch',
      border: '1px solid',
      borderColor: palette.action.disabled,
      borderRightWidth: 0,
      borderRadius: '4px 0 0 4px',
      padding: '0 0.5rem',
      outline: 'none',
      color: palette.text.primary,
      '&:hover, &:focus': {
        borderColor: palette.mode === 'dark' ? palette.text.secondary : palette.primary.main,
        boxShadow: "inset 0 0 0 1px ".concat(palette.mode === 'dark' ? palette.text.secondary : palette.primary.main),
        backgroundColor: palette.mode === 'dark' ? palette.action.hover : '#f9f9f9'
      }
    },
    submit: {
      padding: spacing(1, 2),
      borderRadius: '0 4px 4px 0',
      color: palette.common.white,
      backgroundColor: palette.mode === 'dark' ? palette.divider : palette.primary.main,
      '&:hover, &:focus': {
        backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : palette.primary.dark
      }
    }
  });
}