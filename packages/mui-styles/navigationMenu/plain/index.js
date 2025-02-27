"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "plainNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _plainNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _plainNavigationMenu["default"];
  }
});
exports.usePlainNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _plainNavigationMenu = _interopRequireDefault(require("./plainNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePlainNavigationMenuStyles = (0, _makeStyles["default"])(_plainNavigationMenu["default"], {
  name: 'PlainNavigationMenu'
});
exports.usePlainNavigationMenuStyles = usePlainNavigationMenuStyles;