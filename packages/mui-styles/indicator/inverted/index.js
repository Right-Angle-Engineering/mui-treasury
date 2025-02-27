"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "invertedIndicatorStyles", {
  enumerable: true,
  get: function get() {
    return _invertedIndicator["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _invertedIndicator["default"];
  }
});
exports.useInvertedIndicatorStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _invertedIndicator = _interopRequireDefault(require("./invertedIndicator.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useInvertedIndicatorStyles = (0, _makeStyles["default"])(_invertedIndicator["default"]);
exports.useInvertedIndicatorStyles = useInvertedIndicatorStyles;