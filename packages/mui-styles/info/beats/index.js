"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "beatsInfoStyles", {
  enumerable: true,
  get: function get() {
    return _beatsInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _beatsInfo["default"];
  }
});
exports.useBeatsInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _beatsInfo = _interopRequireDefault(require("./beatsInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBeatsInfoStyles = (0, _makeStyles["default"])(_beatsInfo["default"], {
  name: 'BeatsInfo'
});
exports.useBeatsInfoStyles = useBeatsInfoStyles;