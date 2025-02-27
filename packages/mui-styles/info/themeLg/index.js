"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "themeLgInfoStyles", {
  enumerable: true,
  get: function get() {
    return _themeLgInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _themeLgInfo["default"];
  }
});
exports.useThemeLgInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _themeLgInfo = _interopRequireDefault(require("./themeLgInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useThemeLgInfoStyles = (0, _makeStyles["default"])(_themeLgInfo["default"], {
  name: 'ThemeLgInfo'
});
exports.useThemeLgInfoStyles = useThemeLgInfoStyles;