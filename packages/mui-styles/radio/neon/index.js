"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "neonRadioStyles", {
  enumerable: true,
  get: function get() {
    return _neonRadio["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _neonRadio["default"];
  }
});
exports.useNeonRadioStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _neonRadio = _interopRequireDefault(require("./neonRadio.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useNeonRadioStyles = (0, _makeStyles["default"])(_neonRadio["default"], {
  name: 'NeonRadio'
});
exports.useNeonRadioStyles = useNeonRadioStyles;