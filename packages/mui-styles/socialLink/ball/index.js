"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ballSocialLinkStyles", {
  enumerable: true,
  get: function get() {
    return _ballSocialLink["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ballSocialLink["default"];
  }
});
exports.useBallSocialLinkStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _ballSocialLink = _interopRequireDefault(require("./ballSocialLink.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBallSocialLinkStyles = (0, _makeStyles["default"])(_ballSocialLink["default"], {
  name: 'BallSocialLink'
});
exports.useBallSocialLinkStyles = useBallSocialLinkStyles;