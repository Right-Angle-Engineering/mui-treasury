"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "themeSmInfoStyles", {
  enumerable: true,
  get: function get() {
    return _themeSmInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _themeSmInfo["default"];
  }
});
exports.useThemeSmInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _themeSmInfo = _interopRequireDefault(require("./themeSmInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useThemeSmInfoStyles = (0, _makeStyles["default"])(_themeSmInfo["default"], {
  name: 'ThemeSmInfo'
});
exports.useThemeSmInfoStyles = useThemeSmInfoStyles;