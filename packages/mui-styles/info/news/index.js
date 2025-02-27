"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "newsInfoStyles", {
  enumerable: true,
  get: function get() {
    return _newsInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _newsInfo["default"];
  }
});
exports.useNewsInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _newsInfo = _interopRequireDefault(require("./newsInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useNewsInfoStyles = (0, _makeStyles["default"])(_newsInfo["default"], {
  name: 'NewsInfo'
});
exports.useNewsInfoStyles = useNewsInfoStyles;