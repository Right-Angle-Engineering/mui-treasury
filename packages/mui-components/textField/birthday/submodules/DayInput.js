"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _createInput = _interopRequireDefault(require("./createInput"));

var _BirthdayContext = require("../BirthdayContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(function () {
  return {
    root: {
      width: 36,
      paddingLeft: 2,
      paddingRight: 2
    }
  };
}, {
  name: 'DayInput'
});

var _default = (0, _createInput["default"])({
  displayName: 'DayInput',
  useStyles: useStyles,
  customOnBlur: function customOnBlur(e, _ref) {
    var zeroPrefixDisabled = _ref.zeroPrefixDisabled,
        updater = _ref.updater;

    if (!zeroPrefixDisabled) {
      updater((0, _BirthdayContext.prefixZero)(e.target.value));
    }
  },
  fieldName: 'day',
  updaterName: 'changeDay',
  maxLength: 2
});

exports["default"] = _default;