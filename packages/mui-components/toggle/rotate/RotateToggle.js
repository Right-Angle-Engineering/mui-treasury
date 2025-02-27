"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var useStyles = (0, _makeStyles["default"])(function (_ref2) {
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
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    className: (0, _clsx["default"])(styles.root, expanded && styles.rotated, className)
  }, props));
};

RotateToggle.propTypes = {
  component: _propTypes["default"].elementType.isRequired,
  className: _propTypes["default"].string,
  expanded: _propTypes["default"].bool,
  rotation: _propTypes["default"].oneOf(['cw', 'ccw']),
  degree: _propTypes["default"].number
};
RotateToggle.defaultProps = {
  className: undefined,
  expanded: false,
  rotation: 'ccw',
  degree: 90
};
var _default = RotateToggle;
exports["default"] = _default;