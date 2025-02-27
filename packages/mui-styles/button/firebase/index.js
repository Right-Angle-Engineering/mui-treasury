"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "firebaseBtnStyles", {
  enumerable: true,
  get: function get() {
    return _firebaseBtn["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _firebaseBtn["default"];
  }
});
exports.useFirebaseBtnStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _firebaseBtn = _interopRequireDefault(require("./firebaseBtn.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useFirebaseBtnStyles = (0, _makeStyles["default"])(_firebaseBtn["default"]);
exports.useFirebaseBtnStyles = useFirebaseBtnStyles;