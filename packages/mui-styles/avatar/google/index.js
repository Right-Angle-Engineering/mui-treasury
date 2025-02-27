"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "googleAvatarStyles", {
  enumerable: true,
  get: function get() {
    return _googleAvatar["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _googleAvatar["default"];
  }
});
exports.useGoogleAvatarStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _googleAvatar = _interopRequireDefault(require("./googleAvatar.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGoogleAvatarStyles = (0, _makeStyles["default"])(_googleAvatar["default"], {
  name: 'GoogleAvatar'
});
exports.useGoogleAvatarStyles = useGoogleAvatarStyles;