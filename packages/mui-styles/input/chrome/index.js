"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chromeInputStyles", {
  enumerable: true,
  get: function get() {
    return _chromeInput["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _chromeInput["default"];
  }
});
exports.useChromeInputStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _chromeInput = _interopRequireDefault(require("./chromeInput.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useChromeInputStyles = (0, _makeStyles["default"])(_chromeInput["default"]);
exports.useChromeInputStyles = useChromeInputStyles;