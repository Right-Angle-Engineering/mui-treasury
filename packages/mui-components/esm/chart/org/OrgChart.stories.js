import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import OrgChart from './OrgChart';
storiesOf('mui-components|Chart', module).add('org', function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OrgChart, {
    treeData: {
      children: [{
        children: [{}, {}]
      }, {}, {}, {}]
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(OrgChart, {
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
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(OrgChart, {
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
      return /*#__PURE__*/React.createElement(Box, {
        align: 'center'
      }, /*#__PURE__*/React.createElement(Avatar, null), /*#__PURE__*/React.createElement(Typography, {
        color: 'primary',
        variant: 'subtitle2'
      }, name), /*#__PURE__*/React.createElement(Typography, {
        color: 'textSecondary',
        variant: 'caption'
      }, position));
    }
  }));
});