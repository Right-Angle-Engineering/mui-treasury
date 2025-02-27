"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bootstrapInputStyles", {
  enumerable: true,
  get: function get() {
    return _bootstrapInput["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _bootstrapInput["default"];
  }
});
exports.useBootstrapInputStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bootstrapInput = _interopRequireDefault(require("./bootstrapInput.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBootstrapInputStyles = (0, _makeStyles["default"])(_bootstrapInput["default"]);
exports.useBootstrapInputStyles = useBootstrapInputStyles;