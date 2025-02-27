"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pushingGutterStyles", {
  enumerable: true,
  get: function get() {
    return _pushingGutter["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _pushingGutter["default"];
  }
});
exports.usePushingGutterStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _pushingGutter = _interopRequireDefault(require("./pushingGutter.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePushingGutterStyles = (0, _makeStyles["default"])(_pushingGutter["default"]);
exports.usePushingGutterStyles = usePushingGutterStyles;