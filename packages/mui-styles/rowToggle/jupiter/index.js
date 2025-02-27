"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jupiterRowToggleStyles", {
  enumerable: true,
  get: function get() {
    return _jupiterRowToggle["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _jupiterRowToggle["default"];
  }
});
exports.useJupiterRowToggleStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _jupiterRowToggle = _interopRequireDefault(require("./jupiterRowToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useJupiterRowToggleStyles = (0, _makeStyles["default"])(_jupiterRowToggle["default"], {
  name: 'JupiterRowToggle'
});
exports.useJupiterRowToggleStyles = useJupiterRowToggleStyles;