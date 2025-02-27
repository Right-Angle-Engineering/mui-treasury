import React from 'react';
import { storiesOf } from '@storybook/react';
import makeStyles from '@mui/styles/makeStyles';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import CollapsibleMenu from './CollapsibleMenu';
import SwitchToggle from '../../toggle/switch';
import RowToggle from '../../toggle/row';
import { useCuteSwitchToggleStyles } from '@mui-treasury/styles/switchToggle/cute';
import { useGatsbyRowToggleStyles } from '@mui-treasury/styles/rowToggle/gatsby';
import { useGatsbyListItemStyles } from '@mui-treasury/styles/listItem/gatsby';
import { useMaterialRowToggleStyles } from '@mui-treasury/styles/rowToggle/material';
import { useMaterialListItemStyles } from '@mui-treasury/styles/listItem/material';
import { useMaterialCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/material';
import { useJupiterCollapsibleMenuStyles } from '@mui-treasury/styles/collapsibleMenu/jupiter';
var useStyles = makeStyles(function () {
  return {
    root: {
      '& li': {
        margin: 0
      }
    },
    ex3nestedToggle: {
      marginLeft: 'auto',
      marginRight: -16
    }
  };
});
storiesOf('mui-components|Menu', module).add('collapsible', function () {
  var Component = function Component() {
    var cuteToggleStyles = useCuteSwitchToggleStyles();
    var classes = useStyles();
    var gatsbyListItemStyles = useGatsbyListItemStyles();
    var materialListItemStyles = useMaterialListItemStyles();
    return /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 4,
      className: classes.root
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      renderToggle: function renderToggle(_ref) {
        var onClick = _ref.onClick,
            collapsed = _ref.collapsed;
        return /*#__PURE__*/React.createElement(ListItem, {
          button: true,
          onClick: onClick
        }, "Toggler ", /*#__PURE__*/React.createElement(SwitchToggle, {
          toggled: collapsed
        }));
      }
    }, /*#__PURE__*/React.createElement(ListItem, null, "List item 1"), /*#__PURE__*/React.createElement(ListItem, null, "List item 2"), /*#__PURE__*/React.createElement(ListItem, null, "List item 3"), /*#__PURE__*/React.createElement(ListItem, null, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      renderToggle: function renderToggle(_ref2) {
        var onClick = _ref2.onClick,
            collapsed = _ref2.collapsed;
        return /*#__PURE__*/React.createElement(RowToggle, null, /*#__PURE__*/React.createElement(ListItem, null, "Category header"), /*#__PURE__*/React.createElement(RowToggle.Action, {
          button: true,
          toggled: collapsed,
          classes: cuteToggleStyles,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/React.createElement(ListItem, null, "List item 1"), /*#__PURE__*/React.createElement(ListItem, null, "List item 2"), /*#__PURE__*/React.createElement(ListItem, null, "List item 3"), /*#__PURE__*/React.createElement(ListItem, null, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      renderToggle: function renderToggle(_ref3) {
        var onClick = _ref3.onClick,
            collapsed = _ref3.collapsed;
        return /*#__PURE__*/React.createElement(RowToggle, null, /*#__PURE__*/React.createElement(ListItem, {
          className: classes.ex2Item
        }, "Category header"), /*#__PURE__*/React.createElement(RowToggle.Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/React.createElement(ListItem, null, "List item 1"), /*#__PURE__*/React.createElement(ListItem, null, "List item 2"), /*#__PURE__*/React.createElement(CollapsibleMenu, {
      renderToggle: function renderToggle(_ref4) {
        var onClick = _ref4.onClick,
            collapsed = _ref4.collapsed;
        return /*#__PURE__*/React.createElement(ListItem, {
          button: true,
          onClick: onClick
        }, "Toggler", ' ', /*#__PURE__*/React.createElement(SwitchToggle, {
          toggled: collapsed,
          className: classes.ex3nestedToggle
        }));
      }
    }, /*#__PURE__*/React.createElement(ListItem, null, "List item 1.2"), /*#__PURE__*/React.createElement(ListItem, null, "List item 2.2")), /*#__PURE__*/React.createElement(ListItem, null, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      renderToggle: function renderToggle(_ref5) {
        var onClick = _ref5.onClick,
            collapsed = _ref5.collapsed;
        return /*#__PURE__*/React.createElement(RowToggle, {
          useStyles: useGatsbyRowToggleStyles
        }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
          button: true,
          selected: true
        }, "Gatsby styles"), /*#__PURE__*/React.createElement(RowToggle.Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/React.createElement(ListItem, {
      classes: gatsbyListItemStyles
    }, "List item 1"), /*#__PURE__*/React.createElement(ListItem, {
      classes: gatsbyListItemStyles,
      selected: true,
      button: true
    }, "List item 2"), /*#__PURE__*/React.createElement(ListItem, {
      classes: gatsbyListItemStyles
    }, "List item 3"), /*#__PURE__*/React.createElement(ListItem, {
      classes: gatsbyListItemStyles
    }, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      renderToggle: function renderToggle(_ref6) {
        var onClick = _ref6.onClick,
            collapsed = _ref6.collapsed;
        return /*#__PURE__*/React.createElement(RowToggle, {
          useStyles: useMaterialRowToggleStyles
        }, /*#__PURE__*/React.createElement(RowToggle.ListItem, {
          button: true
        }, "Material with icon"), /*#__PURE__*/React.createElement(RowToggle.Action, {
          button: true,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/React.createElement(Remove, null) : /*#__PURE__*/React.createElement(Add, null)));
      }
    }, /*#__PURE__*/React.createElement(ListItem, {
      classes: materialListItemStyles
    }, "List item 1"), /*#__PURE__*/React.createElement(ListItem, {
      classes: materialListItemStyles,
      selected: true
    }, "List item 2"), /*#__PURE__*/React.createElement(ListItem, {
      classes: materialListItemStyles
    }, "List item 3"), /*#__PURE__*/React.createElement(ListItem, {
      classes: materialListItemStyles
    }, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      useStyles: useMaterialCollapsibleMenuStyles,
      renderToggle: function renderToggle(_ref7) {
        var onClick = _ref7.onClick,
            collapsed = _ref7.collapsed;
        return /*#__PURE__*/React.createElement(CollapsibleMenu.Row, null, /*#__PURE__*/React.createElement(CollapsibleMenu.RowItem, {
          button: true,
          selected: true
        }, "Material with icon"), /*#__PURE__*/React.createElement(CollapsibleMenu.Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/React.createElement(Remove, null) : /*#__PURE__*/React.createElement(Add, null)));
      }
    }, /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 1"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, {
      selected: true
    }, "List item 2"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 3"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 4"))), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(CollapsibleMenu, {
      collapsed: true,
      useStyles: useJupiterCollapsibleMenuStyles,
      renderToggle: function renderToggle(_ref8) {
        var onClick = _ref8.onClick,
            collapsed = _ref8.collapsed;
        return /*#__PURE__*/React.createElement(CollapsibleMenu.Row, null, /*#__PURE__*/React.createElement(CollapsibleMenu.RowItem, {
          button: true,
          selected: true
        }, "Jupiter with icon"), /*#__PURE__*/React.createElement(CollapsibleMenu.Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/React.createElement(Remove, null) : /*#__PURE__*/React.createElement(Add, null)));
      }
    }, /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 1"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, {
      selected: true
    }, "List item 2"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 3"), /*#__PURE__*/React.createElement(CollapsibleMenu.ListItem, null, "List item 4"))));
  };

  return /*#__PURE__*/React.createElement(Component, null);
});