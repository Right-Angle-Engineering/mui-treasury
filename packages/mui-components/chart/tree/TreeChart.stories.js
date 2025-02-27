"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _TreeChart = _interopRequireDefault(require("./TreeChart"));

var _Trunk = _interopRequireDefault(require("./submodules/Trunk"));

var _Stem = _interopRequireDefault(require("./submodules/Stem"));

var _Twig = _interopRequireDefault(require("./submodules/Twig"));

var _Branches = _interopRequireDefault(require("./submodules/Branches"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Chart', module).add('Tree', function () {
  return /*#__PURE__*/_react["default"].createElement(_TreeChart["default"], {
    length: 24,
    gutter: 16,
    outline: '1px solid red'
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    p: 4
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 5
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Branches["default"], null, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Trunk["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null), /*#__PURE__*/_react["default"].createElement(_Branches["default"], null, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Branches["default"], null, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)), /*#__PURE__*/_react["default"].createElement(_Branches["default"], null, /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null))), /*#__PURE__*/_react["default"].createElement(_Twig["default"], null, /*#__PURE__*/_react["default"].createElement(_Stem["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null)))))))))));
});