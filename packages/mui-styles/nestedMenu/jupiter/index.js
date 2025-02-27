"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jupiterNestedMenuStyles", {
  enumerable: true,
  get: function get() {
    return _jupiterNestedMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _jupiterNestedMenu["default"];
  }
});
exports.useJupiterNestedMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _jupiterNestedMenu = _interopRequireDefault(require("./jupiterNestedMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useJupiterNestedMenuStyles = (0, _makeStyles["default"])(_jupiterNestedMenu["default"], {
  name: 'JupiterNestedMenu'
});
exports.useJupiterNestedMenuStyles = useJupiterNestedMenuStyles;