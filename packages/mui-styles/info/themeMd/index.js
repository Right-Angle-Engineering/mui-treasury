"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "themeMdInfoStyles", {
  enumerable: true,
  get: function get() {
    return _themeMdInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _themeMdInfo["default"];
  }
});
exports.useThemeMdInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _themeMdInfo = _interopRequireDefault(require("./themeMdInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useThemeMdInfoStyles = (0, _makeStyles["default"])(_themeMdInfo["default"], {
  name: 'ThemeMdInfo'
});
exports.useThemeMdInfoStyles = useThemeMdInfoStyles;