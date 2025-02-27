"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "zoomNavigationMenuStyles", {
  enumerable: true,
  get: function get() {
    return _zoomNavigationMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _zoomNavigationMenu["default"];
  }
});
exports.useZoomNavigationMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _zoomNavigationMenu = _interopRequireDefault(require("./zoomNavigationMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useZoomNavigationMenuStyles = (0, _makeStyles["default"])(_zoomNavigationMenu["default"], {
  name: 'ZoomNavigationMenu'
});
exports.useZoomNavigationMenuStyles = useZoomNavigationMenuStyles;