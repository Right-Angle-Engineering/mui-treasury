"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "smallIconStyles", {
  enumerable: true,
  get: function get() {
    return _smallIcon["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _smallIcon["default"];
  }
});
exports.useSmallIconStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _smallIcon = _interopRequireDefault(require("./smallIcon.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSmallIconStyles = (0, _makeStyles["default"])(_smallIcon["default"]);
exports.useSmallIconStyles = useSmallIconStyles;