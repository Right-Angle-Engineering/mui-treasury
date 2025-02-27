"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "materialListItemStyles", {
  enumerable: true,
  get: function get() {
    return _materialListItem["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _materialListItem["default"];
  }
});
exports.useMaterialListItemStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _materialListItem = _interopRequireDefault(require("./materialListItem.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMaterialListItemStyles = (0, _makeStyles["default"])(_materialListItem["default"], {
  name: 'MaterialListItem'
});
exports.useMaterialListItemStyles = useMaterialListItemStyles;