"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "roundInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _roundInputBase["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _roundInputBase["default"];
  }
});
exports.useRoundInputBaseStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _roundInputBase = _interopRequireDefault(require("./roundInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useRoundInputBaseStyles = (0, _makeStyles["default"])(_roundInputBase["default"], {
  name: 'RoundInputBase'
});
exports.useRoundInputBaseStyles = useRoundInputBaseStyles;