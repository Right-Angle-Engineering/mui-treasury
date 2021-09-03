"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "peopleCardFooterStyles", {
  enumerable: true,
  get: function get() {
    return _peopleCardFooter["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _peopleCardFooter["default"];
  }
});
exports.usePeopleCardFooterStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _peopleCardFooter = _interopRequireDefault(require("./peopleCardFooter.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usePeopleCardFooterStyles = (0, _makeStyles["default"])(_peopleCardFooter["default"]);
exports.usePeopleCardFooterStyles = usePeopleCardFooterStyles;