"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "minimalSelectStyles", {
  enumerable: true,
  get: function get() {
    return _minimalSelect["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _minimalSelect["default"];
  }
});
exports.useMinimalSelectStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _minimalSelect = _interopRequireDefault(require("./minimalSelect.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMinimalSelectStyles = (0, _makeStyles["default"])(_minimalSelect["default"], {
  name: 'MinimalSelect'
});
exports.useMinimalSelectStyles = useMinimalSelectStyles;