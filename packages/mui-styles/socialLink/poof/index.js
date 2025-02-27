"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "poofSocialLinkStyles", {
  enumerable: true,
  get: function get() {
    return _poofSocialLink["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _poofSocialLink["default"];
  }
});
exports.usePoofSocialLinkStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _poofSocialLink = _interopRequireDefault(require("./poofSocialLink.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePoofSocialLinkStyles = (0, _makeStyles["default"])(_poofSocialLink["default"], {
  name: 'PoofSocialLink'
});
exports.usePoofSocialLinkStyles = usePoofSocialLinkStyles;