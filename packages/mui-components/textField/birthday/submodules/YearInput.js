"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createInput = _interopRequireDefault(require("./createInput"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(function () {
  return {
    root: {
      width: 48,
      paddingLeft: 2,
      paddingRight: 2
    }
  };
}, {
  name: 'YearInput'
});

var _default = (0, _createInput["default"])({
  displayName: 'YearInput',
  useStyles: useStyles,
  fieldName: 'year',
  updaterName: 'changeYear',
  maxLength: 4
});

exports["default"] = _default;