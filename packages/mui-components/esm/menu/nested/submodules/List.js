function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiList from '@mui/material/List';
import { useCtxStyles } from '../StylesContext';

var List = function List(_ref) {
  var className = _ref.className,
      level = _ref.level,
      props = _objectWithoutProperties(_ref, ["className", "level"]);

  var classes = useCtxStyles(props);
  return /*#__PURE__*/React.createElement(MuiList, _extends({}, props, {
    className: cx(classes.list, classes["lv".concat(level, "List")], className)
  }));
};

List.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number
};
List.defaultProps = {};
export default List;