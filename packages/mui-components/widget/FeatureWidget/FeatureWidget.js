"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@mui/styles/withStyles"));

var _featureWidget = _interopRequireDefault(require("./featureWidget.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FeatureWidget = (0, _withStyles["default"])(_featureWidget["default"], {
  name: 'FeatureWidget'
})(function (props) {
  var classes = props.classes,
      renderIcon = props.renderIcon,
      title = props.title,
      content = props.content,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, renderIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconWrapper
  }, renderIcon({
    className: classes.icon
  })), /*#__PURE__*/_react["default"].createElement("h2", {
    className: classes.title,
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.content,
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), typeof children === 'function' ? children({
    className: classes.bottom
  }) : children);
});
FeatureWidget.propTypes = {
  title: _propTypes["default"].string,
  content: _propTypes["default"].string,
  renderIcon: _propTypes["default"].func
};
FeatureWidget.defaultProps = {
  title: '',
  content: '',
  renderIcon: undefined
};
var _default = FeatureWidget;
exports["default"] = _default;