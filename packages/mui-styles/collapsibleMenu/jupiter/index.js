"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jupiterCollapsibleMenuStyles", {
  enumerable: true,
  get: function get() {
    return _jupiterCollapsibleMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _jupiterCollapsibleMenu["default"];
  }
});
exports.useJupiterCollapsibleMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _jupiterCollapsibleMenu = _interopRequireDefault(require("./jupiterCollapsibleMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useJupiterCollapsibleMenuStyles = (0, _makeStyles["default"])(_jupiterCollapsibleMenu["default"], {
  name: 'JupiterCollapsibleMenu'
});
exports.useJupiterCollapsibleMenuStyles = useJupiterCollapsibleMenuStyles;