"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestEach = _interopRequireDefault(require("jest-each"));

var _react2 = require("@testing-library/react");

var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));

var _CallMade = _interopRequireDefault(require("@mui/icons-material/CallMade"));

var _core = require("./core");

var _Column = _interopRequireDefault(require("./Column"));

var _Row = _interopRequireDefault(require("./Row"));

var _Item = _interopRequireDefault(require("./Item"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('Flex', function () {
  describe('Row', function () {
    (0, _jestEach["default"])([['left', undefined], ['right', {
      marginLeft: 'auto'
    }], ['top', {
      alignSelf: 'flex-start'
    }], ['bottom', {
      alignSelf: 'flex-end'
    }], ['middle', {
      alignSelf: 'center'
    }], ['middle-right', {
      alignSelf: 'center',
      marginLeft: 'auto'
    }], ['center', {
      alignSelf: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }]]).it('position: %s should return correct style', function (pos, expectedValue) {
      expect((0, _core.positionInsideRow)(pos)).toEqual(expectedValue);
    });
    (0, _jestEach["default"])([['undefined', undefined, ''], ['number', 2, '16px'], ['em', '1em', '1em'], ['rem', '1rem', '1rem'], ['px', '12px', '12px']]).it('gap support value as %s', function (unit, value, expected) {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        "data-testid": 'row',
        gap: value
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null), "test"));
      expect(_react2.screen.getByTestId('row')).toHaveStyle(expected ? "padding: ".concat(expected) : '');
    });
    it('has display flex with direction=row', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        "data-testid": 'row',
        gap: 2
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item")));
      expect(_react2.screen.getByTestId('row')).toHaveStyle('display: flex');
      expect(_react2.screen.getByTestId('row')).not.toHaveStyle('flex-direction: column');
    });
  });
  describe('Column', function () {
    (0, _jestEach["default"])([['left', {
      alignSelf: 'flex-start'
    }], ['right', {
      alignSelf: 'flex-end'
    }], ['top', undefined], ['bottom', {
      marginTop: 'auto'
    }], ['middle', {
      marginTop: 'auto',
      marginBottom: 'auto'
    }], ['middle-right', {
      alignSelf: 'flex-end',
      marginTop: 'auto',
      marginBottom: 'auto'
    }], ['center', {
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: 'auto'
    }]]).it('position: %s should return correct style', function (pos, expectedValue) {
      expect((0, _core.positionInsideColumn)(pos)).toEqual(expectedValue);
    });
    (0, _jestEach["default"])([['undefined', undefined, ''], ['number', 2, '16px'], ['em', '1em', '1em'], ['rem', '1rem', '1rem'], ['px', '12px', '12px']]).it('gap support value as %s', function (unit, value, expected) {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        "data-testid": 'column',
        gap: value
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null)));
      expect(_react2.screen.getByTestId('column')).toHaveStyle(expected ? "padding: ".concat(expected) : '');
    });
    it('has display flex with direction=column', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        "data-testid": 'column',
        gap: 2
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item")));
      expect(_react2.screen.getByTestId('column')).toHaveStyle('display: flex');
      expect(_react2.screen.getByTestId('column')).toHaveStyle('flex-direction: column');
    });
  });
  describe('Item', function () {
    (0, _jestEach["default"])([['cssPosition', 'relative', 'position: relative'], ['grow', undefined, ''], ['grow', true, 'flex-grow: 1'], ['grow', 2, 'flex-grow: 2'], ['shrink', undefined, ''], ['shrink', 0, 'flex-shrink: 0'], ['shrink', 2, 'flex-shrink: 2']]).it('accept props: %s and turn into correct css', function (propName, value, expected) {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Item["default"], _defineProperty({}, propName, value), "item"));
      expect(_react2.screen.getByText('item')).toHaveStyle(expected);
    });
    it('has padding half of gap', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        gap: 2
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item1"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item2")));
      expect(_react2.screen.getByText('item1')).toHaveStyle('padding: 16px');
      expect(_react2.screen.getByText('item2')).toHaveStyle('padding: 16px');
    });
  });
  describe('Nested', function () {
    it('NestedRow,Column should not have padding because of inherit', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        "data-testid": 'row',
        gap: 2
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item1"), /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        "data-testid": 'nested-row'
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-row item1"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-row item2")), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        "data-testid": 'nested-column'
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item1"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item2"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item3"))));
      expect(_react2.screen.getByTestId('nested-row')).not.toHaveStyle("padding: 16px");
      expect(_react2.screen.getByTestId('nested-column')).not.toHaveStyle('padding: 16px');
    });
    it('NestedItem should have padding related to nearest Provider', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        gap: 2
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "item1"), /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        gap: 1,
        "data-testid": 'nested-row'
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-row item1"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-row item2")), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        gap: 3,
        "data-testid": 'nested-column'
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item1"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item2"), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, "nested-column item3"))));
      expect(_react2.screen.getByTestId('nested-row')).toHaveStyle('padding: 16px; margin: -8px');
      expect(_react2.screen.getByText('nested-row item1')).toHaveStyle('padding: 8px');
      expect(_react2.screen.getByTestId('nested-column')).toHaveStyle('padding: 16px; margin: -24px');
      expect(_react2.screen.getByText('nested-column item2')).toHaveStyle('padding: 24px');
    });
  });
  describe('Real world', function () {
    var BasicProfile = function BasicProfile(props) {
      return /*#__PURE__*/_react["default"].createElement(_Row["default"], _extends({
        "data-testid": 'basicProfile-row'
      }, props), /*#__PURE__*/_react["default"].createElement(_Avatar["default"], null, "S"), /*#__PURE__*/_react["default"].createElement(_Item["default"], {
        "data-testid": 'basicProfile-item',
        position: 'middle',
        pl: 1
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "CREATOR"), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "siriwatknp")));
    };

    var CardHeader = function CardHeader(props) {
      return /*#__PURE__*/_react["default"].createElement(_Row["default"], _extends({
        "data-testid": 'cardHeader-row'
      }, props), /*#__PURE__*/_react["default"].createElement(_Item["default"], {
        "data-testid": 'cardHeader-info',
        position: 'middle'
      }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, /*#__PURE__*/_react["default"].createElement("b", null, "Firebase")), /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, "Similar to firebase theme")), /*#__PURE__*/_react["default"].createElement(_Item["default"], {
        "data-testid": 'cardHeader-iconBtn',
        position: 'right',
        mr: -0.5
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], null, /*#__PURE__*/_react["default"].createElement(_CallMade["default"], null))));
    };

    it('Showcase direction:column should have correct style', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        gap: 2,
        "data-testid": 'column-root'
      }, /*#__PURE__*/_react["default"].createElement(CardHeader, null), /*#__PURE__*/_react["default"].createElement(_Item["default"], null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        minHeight: 200,
        bgcolor: '#F4F7FA',
        borderRadius: 8
      })), /*#__PURE__*/_react["default"].createElement(BasicProfile, null)));
      expect(_react2.screen.getByTestId('column-root')).toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(_react2.screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');
      expect(_react2.screen.getByTestId('basicProfile-row')).not.toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    });
    it('Showcase direction:row should have correct style', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Row["default"], {
        gap: 2,
        "data-testid": 'row-root'
      }, /*#__PURE__*/_react["default"].createElement(_Item["default"], null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
        minHeight: 200,
        bgcolor: '#F4F7FA',
        borderRadius: 8
      })), /*#__PURE__*/_react["default"].createElement(_Column["default"], {
        "data-testid": 'column-wrapper'
      }, /*#__PURE__*/_react["default"].createElement(CardHeader, null), /*#__PURE__*/_react["default"].createElement(BasicProfile, {
        position: 'bottom'
      }))));
      expect(_react2.screen.getByTestId('row-root')).toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('column-wrapper')).not.toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(_react2.screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(_react2.screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');
      expect(_react2.screen.getByTestId('basicProfile-row')).toHaveStyle('margin-top: auto');
      expect(_react2.screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    });
  });
});