"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "neumorphShadowStyles", {
  enumerable: true,
  get: function get() {
    return _neumorphShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _neumorphShadow["default"];
  }
});
exports.useNeumorphShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _neumorphShadow = _interopRequireDefault(require("./neumorphShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useNeumorphShadowStyles = (0, _makeStyles["default"])(_neumorphShadow["default"]);
exports.useNeumorphShadowStyles = useNeumorphShadowStyles;