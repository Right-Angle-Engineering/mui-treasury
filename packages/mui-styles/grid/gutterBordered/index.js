"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gutterBorderedGridStyles", {
  enumerable: true,
  get: function get() {
    return _gutterBorderedGrid["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gutterBorderedGrid["default"];
  }
});
exports.useGutterBorderedGridStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gutterBorderedGrid = _interopRequireDefault(require("./gutterBorderedGrid.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGutterBorderedGridStyles = (0, _makeStyles["default"])(_gutterBorderedGrid["default"]);
exports.useGutterBorderedGridStyles = useGutterBorderedGridStyles;