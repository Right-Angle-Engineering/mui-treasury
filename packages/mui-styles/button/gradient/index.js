"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gradientBtnStyles", {
  enumerable: true,
  get: function get() {
    return _gradientBtn["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gradientBtn["default"];
  }
});
exports.useGradientBtnStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gradientBtn = _interopRequireDefault(require("./gradientBtn.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGradientBtnStyles = (0, _makeStyles["default"])(_gradientBtn["default"]);
exports.useGradientBtnStyles = useGradientBtnStyles;