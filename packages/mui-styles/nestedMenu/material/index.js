"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "materialNestedMenuStyles", {
  enumerable: true,
  get: function get() {
    return _materialNestedMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _materialNestedMenu["default"];
  }
});
exports.useMaterialNestedMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _materialNestedMenu = _interopRequireDefault(require("./materialNestedMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMaterialNestedMenuStyles = (0, _makeStyles["default"])(_materialNestedMenu["default"], {
  name: 'MaterialNestedMenu'
});
exports.useMaterialNestedMenuStyles = useMaterialNestedMenuStyles;