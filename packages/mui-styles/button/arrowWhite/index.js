"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrowWhiteButtonStyles", {
  enumerable: true,
  get: function get() {
    return _arrowWhiteButton["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _arrowWhiteButton["default"];
  }
});
exports.useArrowWhiteButtonStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _arrowWhiteButton = _interopRequireDefault(require("./arrowWhiteButton.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useArrowWhiteButtonStyles = (0, _makeStyles["default"])(_arrowWhiteButton["default"], {
  name: 'ArrowWhiteButton'
});
exports.useArrowWhiteButtonStyles = useArrowWhiteButtonStyles;