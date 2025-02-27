"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n02SwitchStyles", {
  enumerable: true,
  get: function get() {
    return _n02Switch["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n02Switch["default"];
  }
});
exports.useN02SwitchStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _n02Switch = _interopRequireDefault(require("./n02Switch.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN02SwitchStyles = (0, _makeStyles["default"])(_n02Switch["default"], {
  name: 'N02Switch'
});
exports.useN02SwitchStyles = useN02SwitchStyles;