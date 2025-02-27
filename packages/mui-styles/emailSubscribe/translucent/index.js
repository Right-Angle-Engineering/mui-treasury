"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "translucentEmailSubscribeStyles", {
  enumerable: true,
  get: function get() {
    return _translucentEmailSubscribe["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _translucentEmailSubscribe["default"];
  }
});
exports.useTranslucentEmailSubscribeStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _translucentEmailSubscribe = _interopRequireDefault(require("./translucentEmailSubscribe.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTranslucentEmailSubscribeStyles = (0, _makeStyles["default"])(_translucentEmailSubscribe["default"], {
  name: 'TranslucentEmailSubscribe'
});
exports.useTranslucentEmailSubscribeStyles = useTranslucentEmailSubscribeStyles;