"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _createStyles = _interopRequireDefault(require("@mui/styles/createStyles"));

var _core = require("./core");

var _Item = _interopRequireDefault(require("./Item"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var styles = function styles(theme) {
  var breakpoints = theme.breakpoints;
  return (0, _createStyles["default"])({
    root: function root(_ref) {
      var _ref2;

      var at = _ref.at,
          columnStyle = _ref.columnStyle,
          rowStyle = _ref.rowStyle,
          rowReversed = _ref.rowReversed;
      return _ref2 = {
        display: 'flex'
      }, _defineProperty(_ref2, (0, _utils.getLowerMediaQuery)(theme, at), _extends(_extends({}, columnStyle), {}, {
        flexDirection: 'column'
      })), _defineProperty(_ref2, breakpoints.up(at), _extends({
        alignItems: 'center',
        flexDirection: rowReversed ? 'row-reverse' : 'row'
      }, rowStyle)), _ref2;
    }
  });
};

var useStyles = (0, _makeStyles["default"])(styles, {
  name: 'FlexColumnToRow'
});

var ColumnToRow = function ColumnToRow(_ref3) {
  var className = _ref3.className,
      children = _ref3.children,
      gap = _ref3.gap,
      at = _ref3.at,
      columnStyle = _ref3.columnStyle,
      rowStyle = _ref3.rowStyle,
      rowReversed = _ref3.rowReversed,
      props = _objectWithoutProperties(_ref3, ["className", "children", "gap", "at", "columnStyle", "rowStyle", "rowReversed"]);

  var _useBreakpointLookup = (0, _core.useBreakpointLookup)(at),
      calculatedAt = _useBreakpointLookup.calculatedAt;

  var _useGapLookup = (0, _core.useGapLookup)(gap),
      calculatedGap = _useGapLookup.calculatedGap,
      itemProps = _useGapLookup.itemProps;

  var styles = useStyles({
    at: calculatedAt,
    columnStyle: columnStyle,
    rowStyle: rowStyle,
    rowReversed: rowReversed,
    gap: calculatedGap
  });
  return /*#__PURE__*/_react["default"].createElement(_Item["default"], _extends({
    className: (0, _clsx["default"])('FlexColumnToRow', styles.root, className)
  }, itemProps, props, {
    gapDisabled: true
  }), /*#__PURE__*/_react["default"].createElement(_core.Provider, {
    flexDirection: 'column-row',
    gap: calculatedGap
  }, /*#__PURE__*/_react["default"].createElement(_core.BreakpointProvider, {
    at: calculatedAt
  }, children)));
};

var _default = ColumnToRow;
exports["default"] = _default;