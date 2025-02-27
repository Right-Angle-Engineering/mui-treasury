"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "onlineAvatarStyles", {
  enumerable: true,
  get: function get() {
    return _onlineAvatar["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _onlineAvatar["default"];
  }
});
exports.useOnlineAvatarStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _onlineAvatar = _interopRequireDefault(require("./onlineAvatar.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useOnlineAvatarStyles = (0, _makeStyles["default"])(_onlineAvatar["default"], {
  name: 'OnlineAvatar'
});
exports.useOnlineAvatarStyles = useOnlineAvatarStyles;