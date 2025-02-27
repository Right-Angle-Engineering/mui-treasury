"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pointNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _pointNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _pointNavigationMenu["default"];
  }
});
exports.usePointNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _pointNavigationMenu = _interopRequireDefault(require("./pointNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePointNavigationMenuStyles = (0, _makeStyles["default"])(_pointNavigationMenu["default"], {
  name: 'PointNavigationMenu'
});
exports.usePointNavigationMenuStyles = usePointNavigationMenuStyles;