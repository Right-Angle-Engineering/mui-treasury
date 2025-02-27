"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wideCardMediaStyles", {
  enumerable: true,
  get: function get() {
    return _wideCardMedia["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _wideCardMedia["default"];
  }
});
exports.useWideCardMediaStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _wideCardMedia = _interopRequireDefault(require("./wideCardMedia.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWideCardMediaStyles = (0, _makeStyles["default"])(_wideCardMedia["default"]);
exports.useWideCardMediaStyles = useWideCardMediaStyles;