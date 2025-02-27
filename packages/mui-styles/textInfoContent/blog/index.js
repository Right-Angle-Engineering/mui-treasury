"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "blogTextInfoContentStyles", {
  enumerable: true,
  get: function get() {
    return _blogTextInfoContent["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _blogTextInfoContent["default"];
  }
});
exports.useBlogTextInfoContentStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _blogTextInfoContent = _interopRequireDefault(require("./blogTextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBlogTextInfoContentStyles = (0, _makeStyles["default"])(_blogTextInfoContent["default"], {
  name: 'BlogTextInfoContent'
});
exports.useBlogTextInfoContentStyles = useBlogTextInfoContentStyles;