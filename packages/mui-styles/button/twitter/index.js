"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "twitterBtnStyles", {
  enumerable: true,
  get: function get() {
    return _twitterBtn["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _twitterBtn["default"];
  }
});
exports.useTwitterBtnStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _twitterBtn = _interopRequireDefault(require("./twitterBtn.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTwitterBtnStyles = (0, _makeStyles["default"])(_twitterBtn["default"]);
exports.useTwitterBtnStyles = useTwitterBtnStyles;