function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';

var getRotationDegree = function getRotationDegree(_ref) {
  var rotation = _ref.rotation,
      degree = _ref.degree;

  switch (rotation) {
    case 'cw':
      return 1 * degree;

    case 'ccw':
      return -1 * degree;

    default:
      return 0;
  }
};

var useStyles = makeStyles(function (_ref2) {
  var transitions = _ref2.transitions;
  return {
    root: {
      transition: transitions.create()
    },
    rotated: function rotated(_ref3) {
      var rotation = _ref3.rotation,
          degree = _ref3.degree;
      return {
        transform: "rotate(".concat(getRotationDegree({
          rotation: rotation,
          degree: degree
        }), "deg)")
      };
    }
  };
});

var RotateToggle = function RotateToggle(_ref4) {
  var Component = _ref4.component,
      className = _ref4.className,
      expanded = _ref4.expanded,
      rotation = _ref4.rotation,
      degree = _ref4.degree,
      props = _objectWithoutProperties(_ref4, ["component", "className", "expanded", "rotation", "degree"]);

  var styles = useStyles({
    rotation: rotation,
    degree: degree
  });
  return /*#__PURE__*/React.createElement(Component, _extends({
    className: cx(styles.root, expanded && styles.rotated, className)
  }, props));
};

RotateToggle.propTypes = {
  component: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  rotation: PropTypes.oneOf(['cw', 'ccw']),
  degree: PropTypes.number
};
RotateToggle.defaultProps = {
  className: undefined,
  expanded: false,
  rotation: 'ccw',
  degree: 90
};
export default RotateToggle;