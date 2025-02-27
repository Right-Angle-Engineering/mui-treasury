"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fullBorderedGridStyles", {
  enumerable: true,
  get: function get() {
    return _fullBorderedGrid["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _fullBorderedGrid["default"];
  }
});
exports.useFullBorderedGridStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _fullBorderedGrid = _interopRequireDefault(require("./fullBorderedGrid.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFullBorderedGridStyles = (0, _makeStyles["default"])(_fullBorderedGrid["default"]);
exports.useFullBorderedGridStyles = useFullBorderedGridStyles;