"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "halfBorderedGridStyles", {
  enumerable: true,
  get: function get() {
    return _halfBorderedGrid["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _halfBorderedGrid["default"];
  }
});
exports.useHalfBorderedGridStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _halfBorderedGrid = _interopRequireDefault(require("./halfBorderedGrid.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useHalfBorderedGridStyles = (0, _makeStyles["default"])(_halfBorderedGrid["default"]);
exports.useHalfBorderedGridStyles = useHalfBorderedGridStyles;