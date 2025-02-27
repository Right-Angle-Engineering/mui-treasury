"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "squareCardMediaStyles", {
  enumerable: true,
  get: function get() {
    return _squareCardMedia["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _squareCardMedia["default"];
  }
});
exports.useSquareCardMediaStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _squareCardMedia = _interopRequireDefault(require("./squareCardMedia.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSquareCardMediaStyles = (0, _makeStyles["default"])(_squareCardMedia["default"]);
exports.useSquareCardMediaStyles = useSquareCardMediaStyles;