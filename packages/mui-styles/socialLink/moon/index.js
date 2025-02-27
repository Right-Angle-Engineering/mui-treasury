"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "moonSocialLinkStyles", {
  enumerable: true,
  get: function get() {
    return _moonSocialLink["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _moonSocialLink["default"];
  }
});
exports.useMoonSocialLinkStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _moonSocialLink = _interopRequireDefault(require("./moonSocialLink.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMoonSocialLinkStyles = (0, _makeStyles["default"])(_moonSocialLink["default"], {
  name: 'MoonSocialLink'
});
exports.useMoonSocialLinkStyles = useMoonSocialLinkStyles;