"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "downloadMenuStyles", {
  enumerable: true,
  get: function get() {
    return _downloadMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _downloadMenu["default"];
  }
});
exports.useDownloadMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _downloadMenu = _interopRequireDefault(require("./downloadMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useDownloadMenuStyles = (0, _makeStyles["default"])(_downloadMenu["default"], {
  name: 'DownloadMenu'
});
exports.useDownloadMenuStyles = useDownloadMenuStyles;