"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "nikiCategoryMenuStyles", {
  enumerable: true,
  get: function get() {
    return _nikiCategoryMenu["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _nikiCategoryMenu["default"];
  }
});
exports.useNikiCategoryMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _nikiCategoryMenu = _interopRequireDefault(require("./nikiCategoryMenu.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useNikiCategoryMenuStyles = (0, _makeStyles["default"])(_nikiCategoryMenu["default"], {
  name: 'NikiCategoryMenu'
});
exports.useNikiCategoryMenuStyles = useNikiCategoryMenuStyles;