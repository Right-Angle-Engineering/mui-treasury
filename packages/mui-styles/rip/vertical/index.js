"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "verticalRipStyles", {
  enumerable: true,
  get: function get() {
    return _verticalRip["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _verticalRip["default"];
  }
});
exports.useVerticalRipStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _verticalRip = _interopRequireDefault(require("./verticalRip.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useVerticalRipStyles = (0, _makeStyles["default"])(_verticalRip["default"]);
exports.useVerticalRipStyles = useVerticalRipStyles;