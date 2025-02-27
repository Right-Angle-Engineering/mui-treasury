"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _cute = require("@mui-treasury/styles/switchToggle/cute");

var _gatsby = require("@mui-treasury/styles/rowToggle/gatsby");

var _material = require("@mui-treasury/styles/rowToggle/material");

var _jupiter = require("@mui-treasury/styles/rowToggle/jupiter");

var _RowToggle = _interopRequireDefault(require("./RowToggle"));

var _switch = _interopRequireDefault(require("../switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Toggle', module).add('Row', function () {
  var Component = function Component() {
    var cuteActionStyles = (0, _cute.useCuteSwitchToggleStyles)();
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      maxWidth: 400
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true
    }, "Simple ", /*#__PURE__*/_react["default"].createElement(_switch["default"], null)), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], null, "Default", /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, null)), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], null, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true
    }), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true
    }, "Default Lead Action")), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      button: true
    }, "Default Outside"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true,
      classes: cuteActionStyles
    })), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _gatsby.useGatsbyRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, null, "Gatsby styles"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true,
      toggled: true
    })), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _gatsby.useGatsbyRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, {
      selected: true,
      button: true
    }, "Gatsby with icon"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _material.useMaterialRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, {
      component: 'a',
      target: '_blank',
      href: 'https://google.co.th',
      selected: true
    }, "Material styles"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true
    })), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _material.useMaterialRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, {
      button: true
    }, "Material with icon"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _jupiter.useJupiterRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, {
      selected: true
    }, "Jupiter styles"), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: true
    })), /*#__PURE__*/_react["default"].createElement(_RowToggle["default"], {
      useStyles: _jupiter.useJupiterRowToggleStyles
    }, /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].ListItem, {
      button: true
    }, "Jupiter with icon", /*#__PURE__*/_react["default"].createElement(_RowToggle["default"].Action, {
      button: false
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))));
  };

  return /*#__PURE__*/_react["default"].createElement(Component, null);
});