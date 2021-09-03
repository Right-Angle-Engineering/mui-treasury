"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filledTextFieldHook = exports.bootstrapTextFieldHook = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bootstrap = require("./bootstrap");

var _filled = require("./filled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bootstrapTextFieldHook = {
  useLabel: (0, _makeStyles["default"])(_bootstrap.bootstrapLabelStyles),
  useInput: (0, _makeStyles["default"])(_bootstrap.bootstrapInputStyles),
  useHelperText: (0, _makeStyles["default"])(_bootstrap.bootstrapHelperTextStyles)
};
exports.bootstrapTextFieldHook = bootstrapTextFieldHook;
var filledTextFieldHook = {
  useInput: (0, _makeStyles["default"])(_filled.filledInputStyles),
  useHelperText: (0, _makeStyles["default"])(_filled.filledHelperTextStyles)
};
exports.filledTextFieldHook = filledTextFieldHook;