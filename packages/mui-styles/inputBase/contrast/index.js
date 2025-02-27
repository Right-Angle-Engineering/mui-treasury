"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "contrastInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _contrastInputBase["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _contrastInputBase["default"];
  }
});
exports.useContrastInputBaseStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _contrastInputBase = _interopRequireDefault(require("./contrastInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useContrastInputBaseStyles = (0, _makeStyles["default"])(_contrastInputBase["default"]);
exports.useContrastInputBaseStyles = useContrastInputBaseStyles;