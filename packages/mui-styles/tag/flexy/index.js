"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "flexyTagStyles", {
  enumerable: true,
  get: function get() {
    return _flexyTag["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _flexyTag["default"];
  }
});
exports.useFlexyTagStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _flexyTag = _interopRequireDefault(require("./flexyTag.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFlexyTagStyles = (0, _makeStyles["default"])(_flexyTag["default"]);
exports.useFlexyTagStyles = useFlexyTagStyles;