import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Add from '@mui/icons-material/Add';
import { useCuteSwitchToggleStyles } from '@mui-treasury/styles/switchToggle/cute';
import { useGatsbyRowToggleStyles } from '@mui-treasury/styles/rowToggle/gatsby';
import { useMaterialRowToggleStyles } from '@mui-treasury/styles/rowToggle/material';
import { useJupiterRowToggleStyles } from '@mui-treasury/styles/rowToggle/jupiter';
import RowToggle from './RowToggle';
import SwitchToggle from '../switch';
storiesOf('mui-components|Toggle', module).add('Row', function () {
  var Component = function Component() {
    var cuteActionStyles = useCuteSwitchToggleStyles();
    return /*#__PURE__*/React.createElement(Box, {
      maxWidth: 400
    }, /*#__PURE__*/React.createElement(ListItem, {
      button: true
    }, "Simple ", /*#__PURE__*/React.createElement(SwitchToggle, null)), /*#__PURE__*/React.createElement(RowToggle, null, "Default", /*#__PURE__*/React.createElement(RowToggle.Action, null)), /*#__PURE__*/React.createElement(RowToggle, null, /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true
    }), /*#__PURE__*/React.createElement(ListItem, {
      button: true
    }, "Default Lead Action")), /*#__PURE__*/React.createElement(RowToggle, null, /*#__PURE__*/React.createElement(ListItem, {
      button: true
    }, "Default Outside"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true,
      classes: cuteActionStyles
    })), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useGatsbyRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, null, "Gatsby styles"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true,
      toggled: true
    })), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useGatsbyRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
      selected: true,
      button: true
    }, "Gatsby with icon"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true
    }, /*#__PURE__*/React.createElement(Add, null))), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useMaterialRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
      component: 'a',
      target: '_blank',
      href: 'https://google.co.th',
      selected: true
    }, "Material styles"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true
    })), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useMaterialRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
      button: true
    }, "Material with icon"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true
    }, /*#__PURE__*/React.createElement(Add, null))), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useJupiterRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
      selected: true
    }, "Jupiter styles"), /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: true
    })), /*#__PURE__*/React.createElement(RowToggle, {
      useStyles: useJupiterRowToggleStyles
    }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
      button: true
    }, "Jupiter with icon", /*#__PURE__*/React.createElement(RowToggle.Action, {
      button: false
    }, /*#__PURE__*/React.createElement(Add, null)))));
  };

  return /*#__PURE__*/React.createElement(Component, null);
});