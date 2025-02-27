"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "popularInfoStyles", {
  enumerable: true,
  get: function get() {
    return _popularInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _popularInfo["default"];
  }
});
exports.usePopularInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _popularInfo = _interopRequireDefault(require("./popularInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePopularInfoStyles = (0, _makeStyles["default"])(_popularInfo["default"], {
  name: 'PopularInfo'
});
exports.usePopularInfoStyles = usePopularInfoStyles;