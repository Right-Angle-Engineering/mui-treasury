"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "iosSwitchStyles", {
  enumerable: true,
  get: function get() {
    return _iosSwitch["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _iosSwitch["default"];
  }
});
exports.useIosSwitchStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _iosSwitch = _interopRequireDefault(require("./iosSwitch.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useIosSwitchStyles = (0, _makeStyles["default"])(_iosSwitch["default"], {
  name: 'IosSwitch'
});
exports.useIosSwitchStyles = useIosSwitchStyles;