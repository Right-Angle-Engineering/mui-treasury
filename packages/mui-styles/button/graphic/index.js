"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "graphicBtnStyles", {
  enumerable: true,
  get: function get() {
    return _graphicBtn["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _graphicBtn["default"];
  }
});
exports.useGraphicBtnStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _graphicBtn = _interopRequireDefault(require("./graphicBtn.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGraphicBtnStyles = (0, _makeStyles["default"])(_graphicBtn["default"]);
exports.useGraphicBtnStyles = useGraphicBtnStyles;