"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "materialRowToggleStyles", {
  enumerable: true,
  get: function get() {
    return _materialRowToggle["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _materialRowToggle["default"];
  }
});
exports.useMaterialRowToggleStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _materialRowToggle = _interopRequireDefault(require("./materialRowToggle.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMaterialRowToggleStyles = (0, _makeStyles["default"])(_materialRowToggle["default"], {
  name: 'MaterialRowToggle'
});
exports.useMaterialRowToggleStyles = useMaterialRowToggleStyles;