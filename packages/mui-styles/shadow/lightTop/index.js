"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "lightTopShadowStyles", {
  enumerable: true,
  get: function get() {
    return _lightTopShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _lightTopShadow["default"];
  }
});
exports.useLightTopShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _lightTopShadow = _interopRequireDefault(require("./lightTopShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLightTopShadowStyles = (0, _makeStyles["default"])(_lightTopShadow["default"]);
exports.useLightTopShadowStyles = useLightTopShadowStyles;