"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _Remove = _interopRequireDefault(require("@mui/icons-material/Remove"));

var _SwitchToggle = _interopRequireDefault(require("./SwitchToggle"));

var _cute = require("@mui-treasury/styles/switchToggle/cute");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Toggle', module).add('Switch', function () {
  var Component = function Component() {
    var cuteStyles = (0, _cute.useCuteToggleStyles)();
    var secondaryCuteStyles = (0, _cute.useCuteToggleStyles)({
      color: 'secondary.main'
    });
    return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
      p: 2,
      maxWidth: 500
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 4
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], null), /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      toggled: true
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true,
      focusRipple: true
    }), /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true,
      focusRipple: true,
      toggled: true
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)), /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true,
      toggled: true
    }, /*#__PURE__*/_react["default"].createElement(_Remove["default"], null))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      classes: cuteStyles
    }), /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      toggled: true,
      classes: cuteStyles
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true,
      classes: secondaryCuteStyles
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)), /*#__PURE__*/_react["default"].createElement(_SwitchToggle["default"], {
      button: true,
      toggled: true,
      classes: secondaryCuteStyles
    }, /*#__PURE__*/_react["default"].createElement(_Remove["default"], null)))));
  };

  return /*#__PURE__*/_react["default"].createElement(Component, null);
});