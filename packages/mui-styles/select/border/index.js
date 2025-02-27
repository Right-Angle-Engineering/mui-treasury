"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "borderSelectStyles", {
  enumerable: true,
  get: function get() {
    return _borderSelect["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _borderSelect["default"];
  }
});
exports.useBorderSelectStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _borderSelect = _interopRequireDefault(require("./borderSelect.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useBorderSelectStyles = (0, _makeStyles["default"])(_borderSelect["default"], {
  name: 'BorderSelect'
});
exports.useBorderSelectStyles = useBorderSelectStyles;