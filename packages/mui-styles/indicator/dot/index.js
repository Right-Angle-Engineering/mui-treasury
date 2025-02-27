"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dotIndicatorStyles", {
  enumerable: true,
  get: function get() {
    return _dotIndicator["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _dotIndicator["default"];
  }
});
exports.useDotIndicatorStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _dotIndicator = _interopRequireDefault(require("./dotIndicator.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useDotIndicatorStyles = (0, _makeStyles["default"])(_dotIndicator["default"]);
exports.useDotIndicatorStyles = useDotIndicatorStyles;