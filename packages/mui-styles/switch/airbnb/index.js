"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "airbnbSwitchStyles", {
  enumerable: true,
  get: function get() {
    return _airbnbSwitch["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _airbnbSwitch["default"];
  }
});
exports.useAirbnbSwitchStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _airbnbSwitch = _interopRequireDefault(require("./airbnbSwitch.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useAirbnbSwitchStyles = (0, _makeStyles["default"])(_airbnbSwitch["default"], {
  name: 'AirbnbSwitch'
});
exports.useAirbnbSwitchStyles = useAirbnbSwitchStyles;