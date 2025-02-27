"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "apexInfoStyles", {
  enumerable: true,
  get: function get() {
    return _apexInfo["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _apexInfo["default"];
  }
});
exports.useApexInfoStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _apexInfo = _interopRequireDefault(require("./apexInfo.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useApexInfoStyles = (0, _makeStyles["default"])(_apexInfo["default"], {
  name: 'ApexInfo'
});
exports.useApexInfoStyles = useApexInfoStyles;