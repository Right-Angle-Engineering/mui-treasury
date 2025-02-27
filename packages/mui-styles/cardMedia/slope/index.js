"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "slopeCardMediaStyles", {
  enumerable: true,
  get: function get() {
    return _slopeCardMedia["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _slopeCardMedia["default"];
  }
});
exports.useSlopeCardMediaStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _slopeCardMedia = _interopRequireDefault(require("./slopeCardMedia.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSlopeCardMediaStyles = (0, _makeStyles["default"])(_slopeCardMedia["default"]);
exports.useSlopeCardMediaStyles = useSlopeCardMediaStyles;