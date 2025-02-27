"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "borderedInputBaseStyles", {
  enumerable: true,
  get: function get() {
    return _borderedInputBase["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _borderedInputBase["default"];
  }
});
exports.useBorderedInputBaseStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _borderedInputBase = _interopRequireDefault(require("./borderedInputBase.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBorderedInputBaseStyles = (0, _makeStyles["default"])(_borderedInputBase["default"], {
  name: 'BorderedInputBase'
});
exports.useBorderedInputBaseStyles = useBorderedInputBaseStyles;