"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "rowFlexStyles", {
  enumerable: true,
  get: function get() {
    return _rowFlex["default"];
  }
});
exports["default"] = exports.useRowFlexStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _rowFlex = _interopRequireDefault(require("./rowFlex.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useRowFlexStyles = (0, _makeStyles["default"])(_rowFlex["default"]);
exports.useRowFlexStyles = useRowFlexStyles;
var _default = _rowFlex["default"];
exports["default"] = _default;