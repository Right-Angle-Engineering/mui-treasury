"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bulbNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _bulbNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _bulbNavigationMenu["default"];
  }
});
exports.useBulbNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bulbNavigationMenu = _interopRequireDefault(require("./bulbNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBulbNavigationMenuStyles = (0, _makeStyles["default"])(_bulbNavigationMenu["default"], {
  name: 'BulbNavigationMenu'
});
exports.useBulbNavigationMenuStyles = useBulbNavigationMenuStyles;