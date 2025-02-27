"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "jupiterListItemStyles", {
  enumerable: true,
  get: function get() {
    return _jupiterListItem["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _jupiterListItem["default"];
  }
});
exports.useJupiterListItemStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _jupiterListItem = _interopRequireDefault(require("./jupiterListItem.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useJupiterListItemStyles = (0, _makeStyles["default"])(_jupiterListItem["default"], {
  name: 'JupiterListItem'
});
exports.useJupiterListItemStyles = useJupiterListItemStyles;