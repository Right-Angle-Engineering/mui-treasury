"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _tree = _interopRequireWildcard(require("../tree"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultUseStyles = (0, _makeStyles["default"])(_tree.treeChartStyles, {
  name: 'OrgChart'
});

var OrgChart = function OrgChart(_ref) {
  var treeData = _ref.treeData,
      renderContent = _ref.renderContent,
      useStyles = _ref.useStyles,
      props = _objectWithoutProperties(_ref, ["treeData", "renderContent", "useStyles"]);

  if (!treeData) return null;

  var renderChildren = function renderChildren() {
    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return /*#__PURE__*/_react["default"].createElement(_tree["default"].Branches, null, children.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_tree["default"].Twig, {
        key: index
      }, /*#__PURE__*/_react["default"].createElement(_tree["default"].Stem, null, renderContent(item)), item.children && renderChildren(item.children));
    }));
  };

  return /*#__PURE__*/_react["default"].createElement(_tree["default"], _extends({
    useStyles: useStyles
  }, props), /*#__PURE__*/_react["default"].createElement(_tree["default"].Trunk, null, Array.isArray(treeData) ? renderChildren(treeData) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderContent(treeData), treeData.children && renderChildren(treeData.children))));
};

OrgChart.propTypes = {
  treeData: _propTypes["default"].oneOfType([_propTypes["default"].shape({}), _propTypes["default"].arrayOf(_propTypes["default"].shape({}))]),
  renderContent: _propTypes["default"].func,
  useStyles: _propTypes["default"].func
};
OrgChart.defaultProps = {
  treeData: undefined,
  renderContent: function renderContent() {
    return /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null);
  },
  useStyles: defaultUseStyles
};
var _default = OrgChart;
exports["default"] = _default;