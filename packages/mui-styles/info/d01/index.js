"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "d01InfoStyles", {
  enumerable: true,
  get: function get() {
    return _d01Info["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _d01Info["default"];
  }
});
exports.useD01InfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _d01Info = _interopRequireDefault(require("./d01Info.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useD01InfoStyles = (0, _makeStyles["default"])(_d01Info["default"], {
  name: 'D01Info'
});
exports.useD01InfoStyles = useD01InfoStyles;