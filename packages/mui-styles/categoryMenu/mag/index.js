"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "magCategoryMenuStyles", {
  enumerable: true,
  get: function get() {
    return _magCategoryMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _magCategoryMenu["default"];
  }
});
exports.useMagCategoryMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _magCategoryMenu = _interopRequireDefault(require("./magCategoryMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMagCategoryMenuStyles = (0, _makeStyles["default"])(_magCategoryMenu["default"], {
  name: 'MagCategoryMenu'
});
exports.useMagCategoryMenuStyles = useMagCategoryMenuStyles;