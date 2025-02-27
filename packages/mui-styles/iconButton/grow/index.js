"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "growIconButtonStyles", {
  enumerable: true,
  get: function get() {
    return _growIconButton["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _growIconButton["default"];
  }
});
exports.useGrowIconButtonStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _growIconButton = _interopRequireDefault(require("./growIconButton.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGrowIconButtonStyles = (0, _makeStyles["default"])(_growIconButton["default"], {
  name: 'GrowIconButton'
});
exports.useGrowIconButtonStyles = useGrowIconButtonStyles;