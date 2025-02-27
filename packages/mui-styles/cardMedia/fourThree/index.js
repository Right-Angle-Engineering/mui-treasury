"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fourThreeCardMediaStyles", {
  enumerable: true,
  get: function get() {
    return _fourThreeCardMedia["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _fourThreeCardMedia["default"];
  }
});
exports.useFourThreeCardMediaStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _fourThreeCardMedia = _interopRequireDefault(require("./fourThreeCardMedia.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFourThreeCardMediaStyles = (0, _makeStyles["default"])(_fourThreeCardMedia["default"]);
exports.useFourThreeCardMediaStyles = useFourThreeCardMediaStyles;