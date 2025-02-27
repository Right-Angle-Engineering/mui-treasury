"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Badge = _interopRequireDefault(require("@mui/material/Badge"));

var _tabs = require("@mui-treasury/styles/tabs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TwitterIconTabs = function TwitterIconTabs(_ref) {
  var tabs = _ref.tabs,
      globalTabProps = _ref.tabProps,
      globalBadgeProps = _ref.badgeProps,
      props = _objectWithoutProperties(_ref, ["tabs", "tabProps", "badgeProps"]);

  var tabsClasses = _tabs.twitterIconTabsStylesHook.useTabs(props);

  var tabClasses = _tabs.twitterIconTabsStylesHook.useTabItem(globalTabProps);

  var badgeClasses = _tabs.twitterIconTabsStylesHook.useBadge(globalBadgeProps);

  return /*#__PURE__*/_react["default"].createElement(_Tabs["default"], _extends({
    variant: 'fullWidth'
  }, props, {
    classes: tabsClasses
  }), tabs.map(function (tab, i) {
    var badgeProps = tab.badgeProps,
        icon = tab.icon,
        tabProps = _objectWithoutProperties(tab, ["badgeProps", "icon"]);

    return /*#__PURE__*/_react["default"].createElement(_Tab["default"] // eslint-disable-next-line react/no-array-index-key
    , _extends({
      key: i,
      className: 'MuiTab--iconOnly',
      icon: icon
    }, badgeProps && {
      icon: /*#__PURE__*/_react["default"].createElement(_Badge["default"], _extends({
        className: badgeProps.badgeContent === '' ? 'MuiBadge--dotted' : 'MuiBadge--number',
        badgeContent: '',
        invisible: false
      }, globalBadgeProps, badgeProps, {
        classes: _extends(_extends({}, badgeClasses), {}, {
          badge: (0, _clsx["default"])(badgeClasses.badge, 'MuiBadge-badge')
        })
      }), icon)
    }, {
      disableRipple: true
    }, globalTabProps, tabProps, {
      classes: _extends(_extends({}, tabClasses), {}, {
        wrapper: (0, _clsx["default"])(tabClasses.wrapper, 'MuiTab-wrapper')
      })
    }));
  }));
};

TwitterIconTabs.propTypes = {
  tabs: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    icon: _propTypes["default"].node.isRequired
  })),
  tabProps: _propTypes["default"].shape({}),
  badgeProps: _propTypes["default"].shape({})
};
TwitterIconTabs.defaultProps = {
  tabs: [],
  tabProps: {},
  badgeProps: {}
};
var _default = TwitterIconTabs;
exports["default"] = _default;