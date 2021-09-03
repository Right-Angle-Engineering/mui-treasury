"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gmailTabsStyles", {
  enumerable: true,
  get: function get() {
    return _gmailTabs.tabsStyles;
  }
});
Object.defineProperty(exports, "gmailTabItemStyles", {
  enumerable: true,
  get: function get() {
    return _gmailTabs.tabItemStyles;
  }
});
exports.useGmailTabItemStyles = exports.useGmailTabsStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gmailTabs = require("./gmailTabs.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGmailTabsStyles = (0, _makeStyles["default"])(_gmailTabs.tabsStyles);
exports.useGmailTabsStyles = useGmailTabsStyles;
var useGmailTabItemStyles = (0, _makeStyles["default"])(_gmailTabs.tabItemStyles);
exports.useGmailTabItemStyles = useGmailTabItemStyles;