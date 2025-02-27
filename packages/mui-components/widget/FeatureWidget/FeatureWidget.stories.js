"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Container = _interopRequireDefault(require("@mui/material/Container"));

var _FeatureWidget = _interopRequireDefault(require("./FeatureWidget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('mui-components|Widget', module).add('feature', function () {
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    maxWidth: 'xs'
  }, /*#__PURE__*/_react["default"].createElement(_FeatureWidget["default"], {
    title: 'Reduce UI Development time',
    content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "No one likes to write the same code twice, same as ui. I strongly believe that this project can reduce development time for any starter project based on ", /*#__PURE__*/_react["default"].createElement("b", null, "Material-UI")),
    renderIcon: function renderIcon(_ref) {
      var className = _ref.className;
      return /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-fighter-jet ".concat(className)
      });
    }
  }));
});