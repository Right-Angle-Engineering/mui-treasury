"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "lineNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _lineNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _lineNavigationMenu["default"];
  }
});
exports.useLineNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _lineNavigationMenu = _interopRequireDefault(require("./lineNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLineNavigationMenuStyles = (0, _makeStyles["default"])(_lineNavigationMenu["default"], {
  name: 'LineNavigationMenu'
});
exports.useLineNavigationMenuStyles = useLineNavigationMenuStyles;