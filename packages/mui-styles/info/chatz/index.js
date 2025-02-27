"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "chatzInfoStyles", {
  enumerable: true,
  get: function get() {
    return _chatzInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _chatzInfo["default"];
  }
});
exports.useChatzInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _chatzInfo = _interopRequireDefault(require("./chatzInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useChatzInfoStyles = (0, _makeStyles["default"])(_chatzInfo["default"], {
  name: 'ChatzInfo'
});
exports.useChatzInfoStyles = useChatzInfoStyles;