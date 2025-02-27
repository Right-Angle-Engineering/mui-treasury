"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n03TextInfoContentStyles", {
  enumerable: true,
  get: function get() {
    return _n03TextInfoContent["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n03TextInfoContent["default"];
  }
});
exports.useN03TextInfoContentStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _n03TextInfoContent = _interopRequireDefault(require("./n03TextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN03TextInfoContentStyles = (0, _makeStyles["default"])(_n03TextInfoContent["default"], {
  name: 'N03TextInfoContent'
});
exports.useN03TextInfoContentStyles = useN03TextInfoContentStyles;