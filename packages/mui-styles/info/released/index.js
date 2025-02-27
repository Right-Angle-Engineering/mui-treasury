"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "releasedInfoStyles", {
  enumerable: true,
  get: function get() {
    return _releasedInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _releasedInfo["default"];
  }
});
exports.useReleasedInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _releasedInfo = _interopRequireDefault(require("./releasedInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useReleasedInfoStyles = (0, _makeStyles["default"])(_releasedInfo["default"], {
  name: 'ReleasedInfo'
});
exports.useReleasedInfoStyles = useReleasedInfoStyles;