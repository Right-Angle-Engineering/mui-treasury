function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { BirthdayProvider, BirthdayConsumer } from './BirthdayContext';
import DayInput from './submodules/DayInput';
import MonthInput from './submodules/MonthInput';
import YearInput from './submodules/YearInput';
import Separator from './submodules/Separator';
var useStyles = makeStyles(function () {
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
  return /*#__PURE__*/React.createElement(BirthdayProvider, props, /*#__PURE__*/React.createElement(InputLabel, _extends({
    htmlFor: id,
    error: error,
    shrink: true
  }, InputLabelProps), label), /*#__PURE__*/React.createElement(BirthdayConsumer, null, function (_ref2) {
    var value = _ref2.value;
    return /*#__PURE__*/React.createElement(InputBase, {
      className: styles.input,
      id: id,
      label: label,
      value: value
    });
  }), children);
};

BirthdayTextField.propTypes = {
  id: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.node,
  children: PropTypes.node,
  InputLabelProps: PropTypes.shape({}),
  display: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
  toValue: PropTypes.func
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
BirthdayTextField.Day = DayInput;
BirthdayTextField.Month = MonthInput;
BirthdayTextField.Year = YearInput;
BirthdayTextField.Separator = Separator;
export default BirthdayTextField;