"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "softRiseShadowStyles", {
  enumerable: true,
  get: function get() {
    return _softRiseShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _softRiseShadow["default"];
  }
});
exports.useSoftRiseShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _softRiseShadow = _interopRequireDefault(require("./softRiseShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSoftRiseShadowStyles = (0, _makeStyles["default"])(_softRiseShadow["default"]);
exports.useSoftRiseShadowStyles = useSoftRiseShadowStyles;