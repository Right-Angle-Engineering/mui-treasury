"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "minimalEmailSubscribeStyles", {
  enumerable: true,
  get: function get() {
    return _minimalEmailSubscribe["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _minimalEmailSubscribe["default"];
  }
});
exports.useMinimalEmailSubscribeStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _minimalEmailSubscribe = _interopRequireDefault(require("./minimalEmailSubscribe.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMinimalEmailSubscribeStyles = (0, _makeStyles["default"])(_minimalEmailSubscribe["default"], {
  name: 'MinimalEmailSubscribe'
});
exports.useMinimalEmailSubscribeStyles = useMinimalEmailSubscribeStyles;