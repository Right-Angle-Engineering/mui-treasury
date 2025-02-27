"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "readyEmailSubscribeStyles", {
  enumerable: true,
  get: function get() {
    return _readyEmailSubscribe["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _readyEmailSubscribe["default"];
  }
});
exports.useReadyEmailSubscribeStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _readyEmailSubscribe = _interopRequireDefault(require("./readyEmailSubscribe.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useReadyEmailSubscribeStyles = (0, _makeStyles["default"])(_readyEmailSubscribe["default"], {
  name: 'ReadyEmailSubscribe'
});
exports.useReadyEmailSubscribeStyles = useReadyEmailSubscribeStyles;