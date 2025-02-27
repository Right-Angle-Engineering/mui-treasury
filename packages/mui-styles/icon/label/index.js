"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "labelIconStyles", {
  enumerable: true,
  get: function get() {
    return _labelIcon["default"];
  }
});
exports["default"] = exports.useLabelIconStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _labelIcon = _interopRequireDefault(require("./labelIcon.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLabelIconStyles = (0, _makeStyles["default"])(_labelIcon["default"]);
exports.useLabelIconStyles = useLabelIconStyles;
var _default = _labelIcon["default"];
exports["default"] = _default;