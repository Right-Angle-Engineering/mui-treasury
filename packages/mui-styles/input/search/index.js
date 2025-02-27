"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "searchInputStyles", {
  enumerable: true,
  get: function get() {
    return _searchInput["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _searchInput["default"];
  }
});
exports.useSearchInputStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _searchInput = _interopRequireDefault(require("./searchInput.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useSearchInputStyles = (0, _makeStyles["default"])(_searchInput["default"]);
exports.useSearchInputStyles = useSearchInputStyles;