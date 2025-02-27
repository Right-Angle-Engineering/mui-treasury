"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "brandCardHeaderStyles", {
  enumerable: true,
  get: function get() {
    return _brandCardHeader["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _brandCardHeader["default"];
  }
});
exports.useBrandCardHeaderStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _brandCardHeader = _interopRequireDefault(require("./brandCardHeader.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBrandCardHeaderStyles = (0, _makeStyles["default"])(_brandCardHeader["default"]);
exports.useBrandCardHeaderStyles = useBrandCardHeaderStyles;