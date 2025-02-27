"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gradientAvatarStyles", {
  enumerable: true,
  get: function get() {
    return _gradientAvatar["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gradientAvatar["default"];
  }
});
exports.useGradientAvatarStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gradientAvatar = _interopRequireDefault(require("./gradientAvatar.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGradientAvatarStyles = (0, _makeStyles["default"])(_gradientAvatar["default"], {
  name: 'GradientAvatar'
});
exports.useGradientAvatarStyles = useGradientAvatarStyles;