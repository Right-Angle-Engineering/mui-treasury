"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gatsbyCollapsibleMenuStyles", {
  enumerable: true,
  get: function get() {
    return _gatsbyCollapsibleMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gatsbyCollapsibleMenu["default"];
  }
});
exports.useGatsbyCollapsibleMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gatsbyCollapsibleMenu = _interopRequireDefault(require("./gatsbyCollapsibleMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGatsbyCollapsibleMenuStyles = (0, _makeStyles["default"])(_gatsbyCollapsibleMenu["default"], {
  name: 'GatsbyCollapsibleMenu'
});
exports.useGatsbyCollapsibleMenuStyles = useGatsbyCollapsibleMenuStyles;