"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _AvatarGroup = _interopRequireDefault(require("@mui/lab/AvatarGroup"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_index.Row, {
    gap: 2,
    position: 'bottom'
  }, /*#__PURE__*/_react["default"].createElement(_index.Item, null, /*#__PURE__*/_react["default"].createElement(_AvatarGroup["default"], {
    max: 4
  }, new Array(5).fill(0).map(function (_, index) {
    return /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      key: index,
      src: "https://i.pravatar.cc/300?img=".concat(Math.floor(Math.random() * 30))
    });
  }))), /*#__PURE__*/_react["default"].createElement(_index.Item, {
    position: 'middle-right'
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: 'contained',
    color: 'primary',
    disableRipple: true
  }, "Join group"))));
};

exports["default"] = _default;