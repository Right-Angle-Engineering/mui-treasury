"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Container = _interopRequireDefault(require("@mui/material/Container"));

var _ChatMsg = _interopRequireDefault(require("./ChatMsg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Chat Message', module).add('ChatMsg', function () {
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    maxWidth: 'xs'
  }, /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    avatar: '',
    messages: ['Hi Jenny, How r u today?', 'Did you train yesterday', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.']
  }), /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    side: 'right',
    messages: ["Great! What's about you?", 'Of course I did. Speaking of which check this out']
  }), /*#__PURE__*/_react["default"].createElement(_ChatMsg["default"], {
    avatar: '',
    messages: ['Im good.', 'See u later.']
  }));
});