function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import each from 'jest-each';
import { screen, render } from '@testing-library/react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CallMade from '@mui/icons-material/CallMade';
import { positionInsideRow, positionInsideColumn } from './core';
import Column from './Column';
import Row from './Row';
import Item from './Item';
import Box from '@mui/material/Box';
describe('Flex', function () {
  describe('Row', function () {
    each([['left', undefined], ['right', {
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
      expect(positionInsideRow(pos)).toEqual(expectedValue);
    });
    each([['undefined', undefined, ''], ['number', 2, '16px'], ['em', '1em', '1em'], ['rem', '1rem', '1rem'], ['px', '12px', '12px']]).it('gap support value as %s', function (unit, value, expected) {
      render( /*#__PURE__*/React.createElement(Row, {
        "data-testid": 'row',
        gap: value
      }, /*#__PURE__*/React.createElement(Item, null), "test"));
      expect(screen.getByTestId('row')).toHaveStyle(expected ? "padding: ".concat(expected) : '');
    });
    it('has display flex with direction=row', function () {
      render( /*#__PURE__*/React.createElement(Row, {
        "data-testid": 'row',
        gap: 2
      }, /*#__PURE__*/React.createElement(Item, null, "item")));
      expect(screen.getByTestId('row')).toHaveStyle('display: flex');
      expect(screen.getByTestId('row')).not.toHaveStyle('flex-direction: column');
    });
  });
  describe('Column', function () {
    each([['left', {
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
      expect(positionInsideColumn(pos)).toEqual(expectedValue);
    });
    each([['undefined', undefined, ''], ['number', 2, '16px'], ['em', '1em', '1em'], ['rem', '1rem', '1rem'], ['px', '12px', '12px']]).it('gap support value as %s', function (unit, value, expected) {
      render( /*#__PURE__*/React.createElement(Column, {
        "data-testid": 'column',
        gap: value
      }, /*#__PURE__*/React.createElement(Item, null)));
      expect(screen.getByTestId('column')).toHaveStyle(expected ? "padding: ".concat(expected) : '');
    });
    it('has display flex with direction=column', function () {
      render( /*#__PURE__*/React.createElement(Column, {
        "data-testid": 'column',
        gap: 2
      }, /*#__PURE__*/React.createElement(Item, null, "item")));
      expect(screen.getByTestId('column')).toHaveStyle('display: flex');
      expect(screen.getByTestId('column')).toHaveStyle('flex-direction: column');
    });
  });
  describe('Item', function () {
    each([['cssPosition', 'relative', 'position: relative'], ['grow', undefined, ''], ['grow', true, 'flex-grow: 1'], ['grow', 2, 'flex-grow: 2'], ['shrink', undefined, ''], ['shrink', 0, 'flex-shrink: 0'], ['shrink', 2, 'flex-shrink: 2']]).it('accept props: %s and turn into correct css', function (propName, value, expected) {
      render( /*#__PURE__*/React.createElement(Item, _defineProperty({}, propName, value), "item"));
      expect(screen.getByText('item')).toHaveStyle(expected);
    });
    it('has padding half of gap', function () {
      render( /*#__PURE__*/React.createElement(Row, {
        gap: 2
      }, /*#__PURE__*/React.createElement(Item, null, "item1"), /*#__PURE__*/React.createElement(Item, null, "item2")));
      expect(screen.getByText('item1')).toHaveStyle('padding: 16px');
      expect(screen.getByText('item2')).toHaveStyle('padding: 16px');
    });
  });
  describe('Nested', function () {
    it('NestedRow,Column should not have padding because of inherit', function () {
      render( /*#__PURE__*/React.createElement(Row, {
        "data-testid": 'row',
        gap: 2
      }, /*#__PURE__*/React.createElement(Item, null, "item1"), /*#__PURE__*/React.createElement(Row, {
        "data-testid": 'nested-row'
      }, /*#__PURE__*/React.createElement(Item, null, "nested-row item1"), /*#__PURE__*/React.createElement(Item, null, "nested-row item2")), /*#__PURE__*/React.createElement(Column, {
        "data-testid": 'nested-column'
      }, /*#__PURE__*/React.createElement(Item, null, "nested-column item1"), /*#__PURE__*/React.createElement(Item, null, "nested-column item2"), /*#__PURE__*/React.createElement(Item, null, "nested-column item3"))));
      expect(screen.getByTestId('nested-row')).not.toHaveStyle("padding: 16px");
      expect(screen.getByTestId('nested-column')).not.toHaveStyle('padding: 16px');
    });
    it('NestedItem should have padding related to nearest Provider', function () {
      render( /*#__PURE__*/React.createElement(Row, {
        gap: 2
      }, /*#__PURE__*/React.createElement(Item, null, "item1"), /*#__PURE__*/React.createElement(Row, {
        gap: 1,
        "data-testid": 'nested-row'
      }, /*#__PURE__*/React.createElement(Item, null, "nested-row item1"), /*#__PURE__*/React.createElement(Item, null, "nested-row item2")), /*#__PURE__*/React.createElement(Column, {
        gap: 3,
        "data-testid": 'nested-column'
      }, /*#__PURE__*/React.createElement(Item, null, "nested-column item1"), /*#__PURE__*/React.createElement(Item, null, "nested-column item2"), /*#__PURE__*/React.createElement(Item, null, "nested-column item3"))));
      expect(screen.getByTestId('nested-row')).toHaveStyle('padding: 16px; margin: -8px');
      expect(screen.getByText('nested-row item1')).toHaveStyle('padding: 8px');
      expect(screen.getByTestId('nested-column')).toHaveStyle('padding: 16px; margin: -24px');
      expect(screen.getByText('nested-column item2')).toHaveStyle('padding: 24px');
    });
  });
  describe('Real world', function () {
    var BasicProfile = function BasicProfile(props) {
      return /*#__PURE__*/React.createElement(Row, _extends({
        "data-testid": 'basicProfile-row'
      }, props), /*#__PURE__*/React.createElement(Avatar, null, "S"), /*#__PURE__*/React.createElement(Item, {
        "data-testid": 'basicProfile-item',
        position: 'middle',
        pl: 1
      }, /*#__PURE__*/React.createElement(Typography, null, "CREATOR"), /*#__PURE__*/React.createElement(Typography, null, "siriwatknp")));
    };

    var CardHeader = function CardHeader(props) {
      return /*#__PURE__*/React.createElement(Row, _extends({
        "data-testid": 'cardHeader-row'
      }, props), /*#__PURE__*/React.createElement(Item, {
        "data-testid": 'cardHeader-info',
        position: 'middle'
      }, /*#__PURE__*/React.createElement(Typography, null, /*#__PURE__*/React.createElement("b", null, "Firebase")), /*#__PURE__*/React.createElement(Typography, null, "Similar to firebase theme")), /*#__PURE__*/React.createElement(Item, {
        "data-testid": 'cardHeader-iconBtn',
        position: 'right',
        mr: -0.5
      }, /*#__PURE__*/React.createElement(IconButton, null, /*#__PURE__*/React.createElement(CallMade, null))));
    };

    it('Showcase direction:column should have correct style', function () {
      render( /*#__PURE__*/React.createElement(Column, {
        gap: 2,
        "data-testid": 'column-root'
      }, /*#__PURE__*/React.createElement(CardHeader, null), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Box, {
        minHeight: 200,
        bgcolor: '#F4F7FA',
        borderRadius: 8
      })), /*#__PURE__*/React.createElement(BasicProfile, null)));
      expect(screen.getByTestId('column-root')).toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');
      expect(screen.getByTestId('basicProfile-row')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    });
    it('Showcase direction:row should have correct style', function () {
      render( /*#__PURE__*/React.createElement(Row, {
        gap: 2,
        "data-testid": 'row-root'
      }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(Box, {
        minHeight: 200,
        bgcolor: '#F4F7FA',
        borderRadius: 8
      })), /*#__PURE__*/React.createElement(Column, {
        "data-testid": 'column-wrapper'
      }, /*#__PURE__*/React.createElement(CardHeader, null), /*#__PURE__*/React.createElement(BasicProfile, {
        position: 'bottom'
      }))));
      expect(screen.getByTestId('row-root')).toHaveStyle('padding: 16px');
      expect(screen.getByTestId('column-wrapper')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-row')).not.toHaveStyle('padding: 16px');
      expect(screen.getByTestId('cardHeader-info')).toHaveStyle('align-self: center');
      expect(screen.getByTestId('cardHeader-iconBtn')).toHaveStyle('margin-left: auto; margin-right: -4px');
      expect(screen.getByTestId('basicProfile-row')).toHaveStyle('margin-top: auto');
      expect(screen.getByTestId('basicProfile-item')).toHaveStyle('align-self: center; padding-left: 8px');
    });
  });
});