"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bouncyShadowStyles", {
  enumerable: true,
  get: function get() {
    return _bouncyShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _bouncyShadow["default"];
  }
});
exports.useBouncyShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bouncyShadow = _interopRequireDefault(require("./bouncyShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBouncyShadowStyles = (0, _makeStyles["default"])(_bouncyShadow["default"]);
exports.useBouncyShadowStyles = useBouncyShadowStyles;