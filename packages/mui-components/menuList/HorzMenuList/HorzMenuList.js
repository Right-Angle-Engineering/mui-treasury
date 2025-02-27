"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withStyles = _interopRequireDefault(require("@mui/styles/withStyles"));

var _HorzMenuList = _interopRequireDefault(require("./HorzMenuList.styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HorzMenuList = (0, _withStyles["default"])(_HorzMenuList["default"], {
  name: 'HorzMenuList'
})(function (_ref) {
  var className = _ref.className,
      classes = _ref.classes,
      menus = _ref.menus,
      selectedKey = _ref.selectedKey,
      getItemProps = _ref.getItemProps,
      Link = _ref.Link;

  var renderLink = function renderLink(_ref2) {
    var target = _ref2.target,
        to = _ref2.to,
        external = _ref2.external,
        label = _ref2.label;

    if (!to) {
      return label;
    }

    if (external) {
      return /*#__PURE__*/_react["default"].createElement("a", {
        href: to,
        target: target
      }, label);
    }

    return /*#__PURE__*/_react["default"].createElement(Link, {
      to: to,
      target: target
    }, label);
  };

  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _clsx["default"])(classes.navRoot, className)
  }, menus.map(function (item, index) {
    var key = item.key,
        disabled = item.disabled;

    var _getItemProps = getItemProps(item, index),
        extItemProps = _extends({}, _getItemProps);

    return /*#__PURE__*/_react["default"].createElement("li", _extends({
      key: key,
      className: (0, _clsx["default"])(classes.navItem, (typeof selectedKey === 'function' ? selectedKey(key) : key === selectedKey) && classes.navSelected)
    }, extItemProps, {
      disabled: disabled
    }), renderLink(item));
  }));
});
HorzMenuList.propTypes = {
  className: _propTypes["default"].string,
  menus: _propTypes["default"].arrayOf(_propTypes["default"].shape({})),
  selectedKey: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  getItemProps: _propTypes["default"].func
};
HorzMenuList.defaultProps = {
  className: undefined,
  menus: [],
  selectedKey: '',
  getItemProps: function getItemProps() {
    return {};
  }
};
var _default = HorzMenuList;
exports["default"] = _default;