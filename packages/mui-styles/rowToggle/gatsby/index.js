"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "gatsbyRowToggleStyles", {
  enumerable: true,
  get: function get() {
    return _gatsbyRowToggle["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _gatsbyRowToggle["default"];
  }
});
exports.useGatsbyRowToggleStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gatsbyRowToggle = _interopRequireDefault(require("./gatsbyRowToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGatsbyRowToggleStyles = (0, _makeStyles["default"])(_gatsbyRowToggle["default"], {
  name: 'GatsbyRowToggle'
});
exports.useGatsbyRowToggleStyles = useGatsbyRowToggleStyles;