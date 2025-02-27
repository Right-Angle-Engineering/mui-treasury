"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "neonCheckboxStyles", {
  enumerable: true,
  get: function get() {
    return _neonCheckbox["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _neonCheckbox["default"];
  }
});
exports.useNeonCheckboxStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _neonCheckbox = _interopRequireDefault(require("./neonCheckbox.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useNeonCheckboxStyles = (0, _makeStyles["default"])(_neonCheckbox["default"], {
  name: 'NeonCheckbox'
});
exports.useNeonCheckboxStyles = useNeonCheckboxStyles;