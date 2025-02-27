"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "materialCollapsibleMenuStyles", {
  enumerable: true,
  get: function get() {
    return _materialCollapsibleMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _materialCollapsibleMenu["default"];
  }
});
exports.useMaterialCollapsibleMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _materialCollapsibleMenu = _interopRequireDefault(require("./materialCollapsibleMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMaterialCollapsibleMenuStyles = (0, _makeStyles["default"])(_materialCollapsibleMenu["default"], {
  name: 'MaterialCollapsibleMenu'
});
exports.useMaterialCollapsibleMenuStyles = useMaterialCollapsibleMenuStyles;