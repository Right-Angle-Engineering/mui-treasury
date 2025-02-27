"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "musicInfoStyles", {
  enumerable: true,
  get: function get() {
    return _musicInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _musicInfo["default"];
  }
});
exports.useMusicInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _musicInfo = _interopRequireDefault(require("./musicInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMusicInfoStyles = (0, _makeStyles["default"])(_musicInfo["default"], {
  name: 'MusicInfo'
});
exports.useMusicInfoStyles = useMusicInfoStyles;