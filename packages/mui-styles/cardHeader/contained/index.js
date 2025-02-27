"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "containedCardHeaderStyles", {
  enumerable: true,
  get: function get() {
    return _containedCardHeader["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _containedCardHeader["default"];
  }
});
exports.useContainedCardHeaderStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _containedCardHeader = _interopRequireDefault(require("./containedCardHeader.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useContainedCardHeaderStyles = (0, _makeStyles["default"])(_containedCardHeader["default"]);
exports.useContainedCardHeaderStyles = useContainedCardHeaderStyles;