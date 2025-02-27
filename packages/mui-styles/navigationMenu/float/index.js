"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "floatNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _floatNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _floatNavigationMenu["default"];
  }
});
exports.useFloatNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _floatNavigationMenu = _interopRequireDefault(require("./floatNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFloatNavigationMenuStyles = (0, _makeStyles["default"])(_floatNavigationMenu["default"], {
  name: 'FloatNavigationMenu'
});
exports.useFloatNavigationMenuStyles = useFloatNavigationMenuStyles;