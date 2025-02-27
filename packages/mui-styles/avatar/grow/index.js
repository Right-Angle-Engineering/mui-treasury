"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "growAvatarStyles", {
  enumerable: true,
  get: function get() {
    return _growAvatar["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _growAvatar["default"];
  }
});
exports.useGrowAvatarStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _growAvatar = _interopRequireDefault(require("./growAvatar.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGrowAvatarStyles = (0, _makeStyles["default"])(_growAvatar["default"], {
  name: 'GrowAvatar'
});
exports.useGrowAvatarStyles = useGrowAvatarStyles;