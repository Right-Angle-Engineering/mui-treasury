"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _OrgChart = _interopRequireDefault(require("./OrgChart"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Chart', module).add('org', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_OrgChart["default"], {
    treeData: {
      children: [{
        children: [{}, {}]
      }, {}, {}, {}]
    }
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_OrgChart["default"], {
    treeData: [{
      children: [{}, {}, {}]
    }, {
      children: [{}, {
        children: [{}, {}]
      }, {}, {}]
    }],
    spacingX: 16,
    spacingY: 24,
    outline: '1px solid red'
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_OrgChart["default"], {
    treeData: {
      name: 'JunZaa',
      position: 'CEO',
      children: [{
        name: 'Husna Childs',
        position: 'CIO',
        children: [{}, {}]
      }, {
        name: 'Iona Reyes',
        position: 'CFO'
      }, {}, {}]
    },
    renderContent: function renderContent(_ref) {
      var name = _ref.name,
          position = _ref.position;
      return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        align: 'center'
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        color: 'primary',
        variant: 'subtitle2'
      }, name), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        color: 'textSecondary',
        variant: 'caption'
      }, position));
    }
  }));
});