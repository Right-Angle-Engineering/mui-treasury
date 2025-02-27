"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "borderedInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _borderedTextField.borderedInputBaseStyles;
  }
});
Object.defineProperty(exports, "borderedInputLabelStyles", {
  enumerable: true,
  get: function get() {
    return _borderedTextField.borderedInputLabelStyles;
  }
});
exports.borderedTextFieldStylesHook = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _borderedTextField = require("./borderedTextField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var borderedTextFieldStylesHook = {
  useInputBase: (0, _makeStyles["default"])(_borderedTextField.borderedInputBaseStyles, {
    name: 'BorderedTextField'
  }),
  useInputLabel: (0, _makeStyles["default"])(_borderedTextField.borderedInputLabelStyles, {
    name: 'BorderedTextField'
  })
};
exports.borderedTextFieldStylesHook = borderedTextFieldStylesHook;