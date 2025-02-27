"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "n04TextInfoContentStyles", {
  enumerable: true,
  get: function get() {
    return _n04TextInfoContent["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _n04TextInfoContent["default"];
  }
});
exports.useN04TextInfoContentStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _n04TextInfoContent = _interopRequireDefault(require("./n04TextInfoContent.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useN04TextInfoContentStyles = (0, _makeStyles["default"])(_n04TextInfoContent["default"], {
  name: 'N04TextInfoContent'
});
exports.useN04TextInfoContentStyles = useN04TextInfoContentStyles;