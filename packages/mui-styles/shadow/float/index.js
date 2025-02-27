"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "floatShadowStyles", {
  enumerable: true,
  get: function get() {
    return _floatShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _floatShadow["default"];
  }
});
exports.useFloatShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _floatShadow = _interopRequireDefault(require("./floatShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFloatShadowStyles = (0, _makeStyles["default"])(_floatShadow["default"]);
exports.useFloatShadowStyles = useFloatShadowStyles;