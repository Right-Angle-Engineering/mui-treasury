"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "shadeInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _shadeInputBase["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _shadeInputBase["default"];
  }
});
exports.useShadeInputBaseStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _shadeInputBase = _interopRequireDefault(require("./shadeInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useShadeInputBaseStyles = (0, _makeStyles["default"])(_shadeInputBase["default"], {
  name: 'ShadeInputBase'
});
exports.useShadeInputBaseStyles = useShadeInputBaseStyles;