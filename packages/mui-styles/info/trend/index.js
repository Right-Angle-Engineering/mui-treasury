"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "trendInfoStyles", {
  enumerable: true,
  get: function get() {
    return _trendInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _trendInfo["default"];
  }
});
exports.useTrendInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _trendInfo = _interopRequireDefault(require("./trendInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTrendInfoStyles = (0, _makeStyles["default"])(_trendInfo["default"], {
  name: 'TrendInfo'
});
exports.useTrendInfoStyles = useTrendInfoStyles;