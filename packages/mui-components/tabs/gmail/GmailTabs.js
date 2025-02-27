"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GmailTabs = exports.GmailTabItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _Tab = _interopRequireDefault(require("@mui/material/Tab"));

var _Tabs = _interopRequireDefault(require("@mui/material/Tabs"));

var _gmail = require("@mui-treasury/styles/tabs/gmail");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GmailTabItem = function GmailTabItem(_ref) {
  var color = _ref.color,
      label = _ref.label,
      subLabel = _ref.subLabel,
      tag = _ref.tag,
      props = _objectWithoutProperties(_ref, ["color", "label", "subLabel", "tag"]);

  var tabItemStyles = (0, _gmail.useGmailTabItemStyles)(_extends(_extends({}, props), {}, {
    color: color
  }));
  return /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({
    disableTouchRipple: true
  }, props, {
    classes: tabItemStyles,
    label: /*#__PURE__*/_react["default"].createElement("div", {
      className: 'MuiTabItem-labelGroup'
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: 'MuiTabItem-label'
    }, label, " ", tag && /*#__PURE__*/_react["default"].createElement("span", {
      className: 'MuiTabItem-tag'
    }, tag)), subLabel && /*#__PURE__*/_react["default"].createElement("div", {
      className: 'MuiTabItem-subLabel'
    }, subLabel))
  }));
};

exports.GmailTabItem = GmailTabItem;

var GmailTabs = function GmailTabs(_ref2) {
  var _ref2$indicatorColors = _ref2.indicatorColors,
      indicatorColors = _ref2$indicatorColors === void 0 ? ['#d93025', '#1a73e8', '#188038', '#e37400'] : _ref2$indicatorColors,
      props = _objectWithoutProperties(_ref2, ["indicatorColors"]);

  var tabsStyles = (0, _gmail.useGmailTabsStyles)(_extends(_extends({}, props), {}, {
    indicatorColors: indicatorColors
  }));
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react["default"].createElement(_Tabs["default"], _extends({}, props, {
      children: _react["default"].Children.map(props.children, function (child, index) {
        return _react["default"].cloneElement(child, {
          color: indicatorColors[index]
        });
      }),
      classes: tabsStyles,
      TabIndicatorProps: _extends(_extends({}, props.TabIndicatorProps), {}, {
        children: /*#__PURE__*/_react["default"].createElement("div", {
          className: "MuiIndicator-".concat(props.value)
        })
      })
    }))
  );
};

exports.GmailTabs = GmailTabs;
var _default = {
  Tabs: GmailTabs,
  Tab: GmailTabItem
};
exports["default"] = _default;