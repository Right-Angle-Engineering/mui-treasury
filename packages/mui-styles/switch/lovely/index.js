"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "lovelySwitchStyles", {
  enumerable: true,
  get: function get() {
    return _lovelySwitch["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _lovelySwitch["default"];
  }
});
exports.useLovelySwitchStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _lovelySwitch = _interopRequireDefault(require("./lovelySwitch.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useLovelySwitchStyles = (0, _makeStyles["default"])(_lovelySwitch["default"], {
  name: 'LovelySwitch'
});
exports.useLovelySwitchStyles = useLovelySwitchStyles;