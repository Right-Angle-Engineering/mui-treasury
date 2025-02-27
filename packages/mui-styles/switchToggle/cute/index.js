"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cuteSwitchToggleStyles", {
  enumerable: true,
  get: function get() {
    return _cuteSwitchToggle["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _cuteSwitchToggle["default"];
  }
});
exports.useCuteSwitchToggleStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _cuteSwitchToggle = _interopRequireDefault(require("./cuteSwitchToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useCuteSwitchToggleStyles = (0, _makeStyles["default"])(_cuteSwitchToggle["default"]);
exports.useCuteSwitchToggleStyles = useCuteSwitchToggleStyles;