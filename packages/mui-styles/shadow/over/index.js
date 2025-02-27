"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "overShadowStyles", {
  enumerable: true,
  get: function get() {
    return _overShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _overShadow["default"];
  }
});
exports.useOverShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _overShadow = _interopRequireDefault(require("./overShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useOverShadowStyles = (0, _makeStyles["default"])(_overShadow["default"]);
exports.useOverShadowStyles = useOverShadowStyles;