function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import withStyles from '@mui/styles/withStyles';
import createStyles from '@mui-treasury/styles/indicator/dot';
var DotIndicator = withStyles(createStyles, {
  name: 'DotIndicator'
})(function (_ref) {
  var active = _ref.active,
      className = _ref.className,
      classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["active", "className", "classes"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: 'button',
    tabIndex: 0,
    className: cx('DotIndicator-root', className, classes.root, active && "-active ".concat(classes.active))
  }, props));
});
DotIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool
};
DotIndicator.defaultProps = {
  className: '',
  active: false
};
DotIndicator.displayName = 'DotIndicator';
export default DotIndicator;