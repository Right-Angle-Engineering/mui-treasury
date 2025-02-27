"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "outlineSelectStyles", {
  enumerable: true,
  get: function get() {
    return _outlineSelect["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _outlineSelect["default"];
  }
});
exports.useOutlineSelectStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _outlineSelect = _interopRequireDefault(require("./outlineSelect.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useOutlineSelectStyles = (0, _makeStyles["default"])(_outlineSelect["default"], {
  name: 'OutlineSelect'
});
exports.useOutlineSelectStyles = useOutlineSelectStyles;