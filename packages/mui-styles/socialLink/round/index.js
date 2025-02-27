"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "roundSocialLinkStyles", {
  enumerable: true,
  get: function get() {
    return _roundSocialLink["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _roundSocialLink["default"];
  }
});
exports.useRoundSocialLinkStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _roundSocialLink = _interopRequireDefault(require("./roundSocialLink.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useRoundSocialLinkStyles = (0, _makeStyles["default"])(_roundSocialLink["default"], {
  name: 'RoundSocialLink'
});
exports.useRoundSocialLinkStyles = useRoundSocialLinkStyles;