"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dynamicAvatarStyles", {
  enumerable: true,
  get: function get() {
    return _dynamicAvatar["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _dynamicAvatar["default"];
  }
});
exports.useDynamicAvatarStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _dynamicAvatar = _interopRequireDefault(require("./dynamicAvatar.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useDynamicAvatarStyles = (0, _makeStyles["default"])(_dynamicAvatar["default"], {
  name: 'DynamicAvatar'
});
exports.useDynamicAvatarStyles = useDynamicAvatarStyles;