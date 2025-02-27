"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@mui/material/styles");

var _bootstrap = _interopRequireDefault(require("../../input/bootstrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var bootstrapEmailSubscribeStyles = function bootstrapEmailSubscribeStyles(theme) {
  var spacing = theme.spacing;
  var bootstrap = (0, _bootstrap["default"])(theme);
  return (0, _styles.createStyles)({
    form: {
      display: 'flex',
      alignItems: 'center'
    },
    input: _extends(_extends({}, bootstrap.input), {}, {
      flex: 1
    }),
    submit: {
      alignSelf: 'stretch',
      marginLeft: '0.5rem',
      fontFamily: bootstrap.input.fontFamily,
      padding: spacing(1, 1.5),
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      border: '1px solid',
      borderRadius: 4,
      color: '#fff',
      lineHeight: 1.2,
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc'
      }
    }
  });
};

var _default = bootstrapEmailSubscribeStyles;
exports["default"] = _default;