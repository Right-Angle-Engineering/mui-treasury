"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gatsbyNestedMenuStyles", {
  enumerable: true,
  get: function get() {
    return _gatsbyNestedMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gatsbyNestedMenu["default"];
  }
});
exports.useGatsbyNestedMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gatsbyNestedMenu = _interopRequireDefault(require("./gatsbyNestedMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGatsbyNestedMenuStyles = (0, _makeStyles["default"])(_gatsbyNestedMenu["default"], {
  name: 'GatsbyNestedMenu'
});
exports.useGatsbyNestedMenuStyles = useGatsbyNestedMenuStyles;