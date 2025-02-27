"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n02TextInfoContentStyles", {
  enumerable: true,
  get: function get() {
    return _n02TextInfoContent["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n02TextInfoContent["default"];
  }
});
exports.useN02TextInfoContentStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _n02TextInfoContent = _interopRequireDefault(require("./n02TextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN02TextInfoContentStyles = (0, _makeStyles["default"])(_n02TextInfoContent["default"], {
  name: 'N02TextInfoContent'
});
exports.useN02TextInfoContentStyles = useN02TextInfoContentStyles;