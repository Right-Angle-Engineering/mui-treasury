"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "shadeInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _shadeTextField.shadeInputBaseStyles;
  }
});
Object.defineProperty(exports, "shadeInputLabelStyles", {
  enumerable: true,
  get: function get() {
    return _shadeTextField.shadeInputLabelStyles;
  }
});
exports.shadeTextFieldStylesHook = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _shadeTextField = require("./shadeTextField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var shadeTextFieldStylesHook = {
  useInputBase: (0, _makeStyles["default"])(_shadeTextField.shadeInputBaseStyles, {
    name: 'ShadeTextField'
  }),
  useInputLabel: (0, _makeStyles["default"])(_shadeTextField.shadeInputLabelStyles, {
    name: 'ShadeTextField'
  })
};
exports.shadeTextFieldStylesHook = shadeTextFieldStylesHook;