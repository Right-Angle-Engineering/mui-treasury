"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "faceGroupStyles", {
  enumerable: true,
  get: function get() {
    return _faceGroup["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _faceGroup["default"];
  }
});
exports.useFaceGroupStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _faceGroup = _interopRequireDefault(require("./faceGroup.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFaceGroupStyles = (0, _makeStyles["default"])(_faceGroup["default"]);
exports.useFaceGroupStyles = useFaceGroupStyles;