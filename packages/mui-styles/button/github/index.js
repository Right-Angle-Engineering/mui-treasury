"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "githubBtnStyles", {
  enumerable: true,
  get: function get() {
    return _githubBtn["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _githubBtn["default"];
  }
});
exports.useGithubBtnStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _githubBtn = _interopRequireDefault(require("./githubBtn.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGithubBtnStyles = (0, _makeStyles["default"])(_githubBtn["default"]);
exports.useGithubBtnStyles = useGithubBtnStyles;