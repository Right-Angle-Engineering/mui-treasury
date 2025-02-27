"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bootstrapEmailSubscribeStyles", {
  enumerable: true,
  get: function get() {
    return _bootstrapEmailSubscribe["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _bootstrapEmailSubscribe["default"];
  }
});
exports.useBootstrapEmailSubscribeStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _bootstrapEmailSubscribe = _interopRequireDefault(require("./bootstrapEmailSubscribe.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBootstrapEmailSubscribeStyles = (0, _makeStyles["default"])(_bootstrapEmailSubscribe["default"], {
  name: 'BootstrapEmailSubscribe'
});
exports.useBootstrapEmailSubscribeStyles = useBootstrapEmailSubscribeStyles;