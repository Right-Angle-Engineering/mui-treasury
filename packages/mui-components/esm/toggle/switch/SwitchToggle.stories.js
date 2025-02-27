import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import SwitchToggle from './SwitchToggle';
import { useCuteToggleStyles } from '@mui-treasury/styles/switchToggle/cute';
storiesOf('mui-components|Toggle', module).add('Switch', function () {
  var Component = function Component() {
    var cuteStyles = useCuteToggleStyles();
    var secondaryCuteStyles = useCuteToggleStyles({
      color: 'secondary.main'
    });
    return /*#__PURE__*/React.createElement(Box, {
      p: 2,
      maxWidth: 500
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 4
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(SwitchToggle, null), /*#__PURE__*/React.createElement(SwitchToggle, {
      toggled: true
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true,
      focusRipple: true
    }), /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true,
      focusRipple: true,
      toggled: true
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true
    }, /*#__PURE__*/React.createElement(Add, null)), /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true,
      toggled: true
    }, /*#__PURE__*/React.createElement(Remove, null))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(SwitchToggle, {
      classes: cuteStyles
    }), /*#__PURE__*/React.createElement(SwitchToggle, {
      toggled: true,
      classes: cuteStyles
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true,
      classes: secondaryCuteStyles
    }, /*#__PURE__*/React.createElement(Add, null)), /*#__PURE__*/React.createElement(SwitchToggle, {
      button: true,
      toggled: true,
      classes: secondaryCuteStyles
    }, /*#__PURE__*/React.createElement(Remove, null)))));
  };

  return /*#__PURE__*/React.createElement(Component, null);
});