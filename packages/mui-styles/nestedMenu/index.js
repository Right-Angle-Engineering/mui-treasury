"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useJupiterNestedMenuStyles = exports.useGatsbyNestedMenuStyles = void 0;

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _gatsby = _interopRequireDefault(require("./gatsby"));

var _jupiter = _interopRequireDefault(require("./jupiter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useGatsbyNestedMenuStyles = (0, _makeStyles["default"])(_gatsby["default"]);
exports.useGatsbyNestedMenuStyles = useGatsbyNestedMenuStyles;
var useJupiterNestedMenuStyles = (0, _makeStyles["default"])(_jupiter["default"]);
exports.useJupiterNestedMenuStyles = useJupiterNestedMenuStyles;