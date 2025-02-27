"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fadedShadowStyles", {
  enumerable: true,
  get: function get() {
    return _fadedShadow["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _fadedShadow["default"];
  }
});
exports.useFadedShadowStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _fadedShadow = _interopRequireDefault(require("./fadedShadow.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFadedShadowStyles = (0, _makeStyles["default"])(_fadedShadow["default"]);
exports.useFadedShadowStyles = useFadedShadowStyles;