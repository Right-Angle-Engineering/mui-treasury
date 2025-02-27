"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "zoomSocialLinkStyles", {
  enumerable: true,
  get: function get() {
    return _zoomSocialLink["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _zoomSocialLink["default"];
  }
});
exports.useZoomSocialLinkStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _zoomSocialLink = _interopRequireDefault(require("./zoomSocialLink.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useZoomSocialLinkStyles = (0, _makeStyles["default"])(_zoomSocialLink["default"], {
  name: 'ZoomSocialLink'
});
exports.useZoomSocialLinkStyles = useZoomSocialLinkStyles;