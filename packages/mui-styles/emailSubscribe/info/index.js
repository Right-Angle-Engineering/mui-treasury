"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "infoEmailSubscribeStyles", {
  enumerable: true,
  get: function get() {
    return _infoEmailSubscribe["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _infoEmailSubscribe["default"];
  }
});
exports.useInfoEmailSubscribeStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _infoEmailSubscribe = _interopRequireDefault(require("./infoEmailSubscribe.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useInfoEmailSubscribeStyles = (0, _makeStyles["default"])(_infoEmailSubscribe["default"], {
  name: 'InfoEmailSubscribe'
});
exports.useInfoEmailSubscribeStyles = useInfoEmailSubscribeStyles;