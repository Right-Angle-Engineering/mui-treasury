"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));

var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));

var _BirthdayContext = require("./BirthdayContext");

var _DayInput = _interopRequireDefault(require("./submodules/DayInput"));

var _MonthInput = _interopRequireDefault(require("./submodules/MonthInput"));

var _YearInput = _interopRequireDefault(require("./submodules/YearInput"));

var _Separator = _interopRequireDefault(require("./submodules/Separator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _makeStyles["default"])(function () {
  return {
    input: {
      display: 'none'
    }
  };
}, {
  name: 'BirthdayTextField'
});

var BirthdayTextField = function BirthdayTextField(_ref) {
  var id = _ref.id,
      label = _ref.label,
      error = _ref.error,
      children = _ref.children,
      InputLabelProps = _ref.InputLabelProps,
      props = _objectWithoutProperties(_ref, ["id", "label", "error", "children", "InputLabelProps"]);

  var styles = useStyles(props);
  return /*#__PURE__*/_react["default"].createElement(_BirthdayContext.BirthdayProvider, props, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], _extends({
    htmlFor: id,
    error: error,
    shrink: true
  }, InputLabelProps), label), /*#__PURE__*/_react["default"].createElement(_BirthdayContext.BirthdayConsumer, null, function (_ref2) {
    var value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement(_InputBase["default"], {
      className: styles.input,
      id: id,
      label: label,
      value: value
    });
  }), children);
};

BirthdayTextField.propTypes = {
  id: _propTypes["default"].string,
  error: _propTypes["default"].bool,
  label: _propTypes["default"].node,
  children: _propTypes["default"].node,
  InputLabelProps: _propTypes["default"].shape({}),
  display: _propTypes["default"].shape({
    day: _propTypes["default"].string,
    month: _propTypes["default"].string,
    year: _propTypes["default"].string
  }),
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].string,
  toValue: _propTypes["default"].func
};
BirthdayTextField.defaultProps = {
  id: undefined,
  error: false,
  label: undefined,
  children: null,
  InputLabelProps: undefined,
  display: undefined,
  onChange: undefined,
  value: undefined,
  toValue: undefined
};
BirthdayTextField.Day = _DayInput["default"];
BirthdayTextField.Month = _MonthInput["default"];
BirthdayTextField.Year = _YearInput["default"];
BirthdayTextField.Separator = _Separator["default"];
var _default = BirthdayTextField;
exports["default"] = _default;