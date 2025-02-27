"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n01TextInfoContentStyles", {
  enumerable: true,
  get: function get() {
    return _n01TextInfoContent["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n01TextInfoContent["default"];
  }
});
exports.useN01TextInfoContentStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _n01TextInfoContent = _interopRequireDefault(require("./n01TextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN01TextInfoContentStyles = (0, _makeStyles["default"])(_n01TextInfoContent["default"], {
  name: 'N01TextInfoContent'
});
exports.useN01TextInfoContentStyles = useN01TextInfoContentStyles;