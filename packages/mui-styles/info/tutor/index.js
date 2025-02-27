"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "tutorInfoStyles", {
  enumerable: true,
  get: function get() {
    return _tutorInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _tutorInfo["default"];
  }
});
exports.useTutorInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _tutorInfo = _interopRequireDefault(require("./tutorInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useTutorInfoStyles = (0, _makeStyles["default"])(_tutorInfo["default"], {
  name: 'TutorInfo'
});
exports.useTutorInfoStyles = useTutorInfoStyles;