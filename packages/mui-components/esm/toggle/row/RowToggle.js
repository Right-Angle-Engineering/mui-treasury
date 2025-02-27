function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import { StylesProvider } from './StylesContext';
import Action from './submodules/Action';
import ListItem from './submodules/ListItem';
import styles from './rowToggle.styles';
var useDefaultStyles = makeStyles(styles, {
  name: 'RowToggle'
});

var RowToggle = function RowToggle(_ref) {
  var _ref$component = _ref.component,
      Component = _ref$component === void 0 ? 'div' : _ref$component,
      children = _ref.children,
      _ref$useStyles = _ref.useStyles,
      useStyles = _ref$useStyles === void 0 ? useDefaultStyles : _ref$useStyles,
      classes = _ref.classes,
      className = _ref.className,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["component", "children", "useStyles", "classes", "className", "selected"]);

  var result = useStyles(_extends({
    classes: classes
  }, props));
  return /*#__PURE__*/React.createElement(StylesProvider, {
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(Component, _extends({
    className: cx(result.root, selected && result.rootSelected, className)
  }, props), children));
};

RowToggle.Action = Action;
RowToggle.ListItem = ListItem;
RowToggle.propTypes = {
  component: PropTypes.elementType,
  children: PropTypes.node,
  useStyles: PropTypes.func,
  classes: PropTypes.shape({}),
  className: PropTypes.string,
  selected: PropTypes.bool
};
export default RowToggle;