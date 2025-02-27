"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gmailListItemStyles", {
  enumerable: true,
  get: function get() {
    return _gmailListItem["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gmailListItem["default"];
  }
});
exports.useGmailListItemStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gmailListItem = _interopRequireDefault(require("./gmailListItem.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGmailListItemStyles = (0, _makeStyles["default"])(_gmailListItem["default"], {
  name: 'GmailListItem'
});
exports.useGmailListItemStyles = useGmailListItemStyles;