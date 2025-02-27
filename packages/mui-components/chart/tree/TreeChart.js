"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colors = require("@mui/material/colors");

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _TreeContext = require("./TreeContext");

var _treeChart = _interopRequireDefault(require("./treeChart.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useDefaultStyles = (0, _makeStyles["default"])(_treeChart["default"], {
  name: 'TreeChart'
});

var TreeChart = function TreeChart(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(_TreeContext.TreeProvider, props, children);
};

TreeChart.propTypes = {
  children: _propTypes["default"].node,
  length: _propTypes["default"].number,
  gap: _propTypes["default"].number,
  outline: _propTypes["default"].string,
  useStyles: _propTypes["default"].func
};
TreeChart.defaultProps = {
  children: null,
  length: 16,
  gap: 12,
  outline: "1px solid ".concat(_colors.blueGrey[100]),
  useStyles: useDefaultStyles
};
var _default = TreeChart;
exports["default"] = _default;