"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "arrowDarkButtonStyles", {
  enumerable: true,
  get: function get() {
    return _arrowDarkButton["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _arrowDarkButton["default"];
  }
});
exports.useArrowDarkButtonStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _arrowDarkButton = _interopRequireDefault(require("./arrowDarkButton.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useArrowDarkButtonStyles = (0, _makeStyles["default"])(_arrowDarkButton["default"], {
  name: 'ArrowDarkButton'
});
exports.useArrowDarkButtonStyles = useArrowDarkButtonStyles;