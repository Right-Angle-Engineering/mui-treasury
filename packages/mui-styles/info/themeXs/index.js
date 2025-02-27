"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "themeXsInfoStyles", {
  enumerable: true,
  get: function get() {
    return _themeXsInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _themeXsInfo["default"];
  }
});
exports.useThemeXsInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _themeXsInfo = _interopRequireDefault(require("./themeXsInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useThemeXsInfoStyles = (0, _makeStyles["default"])(_themeXsInfo["default"], {
  name: 'ThemeXsInfo'
});
exports.useThemeXsInfoStyles = useThemeXsInfoStyles;