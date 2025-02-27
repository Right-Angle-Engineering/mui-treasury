"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "roundInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _roundTextField.roundInputBaseStyles;
  }
});
Object.defineProperty(exports, "roundInputLabelStyles", {
  enumerable: true,
  get: function get() {
    return _roundTextField.roundInputLabelStyles;
  }
});
exports.roundTextFieldStylesHook = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _roundTextField = require("./roundTextField.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var roundTextFieldStylesHook = {
  useInputBase: (0, _makeStyles["default"])(_roundTextField.roundInputBaseStyles, {
    name: 'RoundTextField'
  }),
  useInputLabel: (0, _makeStyles["default"])(_roundTextField.roundInputLabelStyles, {
    name: 'RoundTextField'
  }),
  useHelperText: (0, _makeStyles["default"])(_roundTextField.roundHelperTextStyles, {
    name: 'RoundTextField'
  })
};
exports.roundTextFieldStylesHook = roundTextFieldStylesHook;