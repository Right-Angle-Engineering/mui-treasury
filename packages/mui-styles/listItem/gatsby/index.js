"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gatsbyListItemStyles", {
  enumerable: true,
  get: function get() {
    return _gatsbyListItem["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gatsbyListItem["default"];
  }
});
exports.useGatsbyListItemStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gatsbyListItem = _interopRequireDefault(require("./gatsbyListItem.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGatsbyListItemStyles = (0, _makeStyles["default"])(_gatsbyListItem["default"], {
  name: 'GatsbyListItem'
});
exports.useGatsbyListItemStyles = useGatsbyListItemStyles;