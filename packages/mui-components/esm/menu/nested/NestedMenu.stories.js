import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NestedMenu from './NestedMenu';
import { useGatsbyNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/gatsby';
import { useMaterialNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/material';
import { useJupiterNestedMenuStyles } from '@mui-treasury/styles/nestedMenu/jupiter';

var DefaultNestedMenu = function DefaultNestedMenu(_ref) {
  var menus = _ref.menus,
      useStyles = _ref.useStyles;
  return /*#__PURE__*/React.createElement(NestedMenu, {
    menus: menus,
    useStyles: useStyles
  }, /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    button: true,
    selected: true,
    level: 1
  }, "Introduction"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    button: true,
    level: 1
  }, "Quick Start"), /*#__PURE__*/React.createElement(NestedMenu.Parent, {
    level: 1,
    active: true,
    collapsed: true
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse, {
    level: 1,
    collapsed: true,
    renderToggle: function renderToggle(_ref2) {
      var onClick = _ref2.onClick,
          collapsed = _ref2.collapsed;
      return /*#__PURE__*/React.createElement(NestedMenu.Collapse.Row, null, /*#__PURE__*/React.createElement(NestedMenu.Collapse.RowItem, {
        button: true,
        selected: true
      }, "Reference Guides"), /*#__PURE__*/React.createElement(NestedMenu.Collapse.Action, {
        onClick: onClick,
        toggled: collapsed
      }));
    }
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse.List, null, /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "Preparing Your Environment"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "Deploying & Hosting"), /*#__PURE__*/React.createElement(NestedMenu.Parent, {
    level: 2,
    active: true
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse, {
    level: 2,
    collapsed: true,
    renderToggle: function renderToggle(_ref3) {
      var onClick = _ref3.onClick,
          collapsed = _ref3.collapsed;
      return /*#__PURE__*/React.createElement(NestedMenu.Collapse.Row, null, /*#__PURE__*/React.createElement(NestedMenu.Collapse.RowItem, {
        selected: true,
        button: true,
        onClick: onClick
      }, "Custom Configuration", /*#__PURE__*/React.createElement(NestedMenu.Collapse.Action, {
        button: false,
        toggled: collapsed
      })));
    }
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse.List, null, /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 3,
    selected: true
  }, "Customizing Babel.js Config"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 3
  }, "Using Babel Plugin Macros"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 3
  }, "Adding a Custom Webpack Config"))))))), /*#__PURE__*/React.createElement(NestedMenu.Parent, {
    level: 1
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse, {
    level: 1,
    renderToggle: function renderToggle(_ref4) {
      var onClick = _ref4.onClick,
          collapsed = _ref4.collapsed;
      return /*#__PURE__*/React.createElement(NestedMenu.Collapse.Row, null, /*#__PURE__*/React.createElement(NestedMenu.Collapse.RowItem, {
        button: true,
        selected: true
      }, "Gatsby API"), /*#__PURE__*/React.createElement(NestedMenu.Collapse.Action, {
        onClick: onClick,
        toggled: collapsed
      }));
    }
  }, /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "Gatsby Themes"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "Gatsby Link"))), /*#__PURE__*/React.createElement(NestedMenu.Parent, {
    level: 1
  }, /*#__PURE__*/React.createElement(NestedMenu.Collapse, {
    level: 1,
    renderToggle: function renderToggle(_ref5) {
      var onClick = _ref5.onClick,
          collapsed = _ref5.collapsed;
      return /*#__PURE__*/React.createElement(NestedMenu.Collapse.Row, null, /*#__PURE__*/React.createElement(NestedMenu.Collapse.RowItem, {
        button: true
      }, "Release & Migration"), /*#__PURE__*/React.createElement(NestedMenu.Collapse.Action, {
        onClick: onClick,
        toggled: collapsed
      }));
    }
  }, /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "v2 Release Notes"), /*#__PURE__*/React.createElement(NestedMenu.ListItem, {
    level: 2
  }, "v1 Release Notes"))));
};

storiesOf('mui-components|Menu', module).add('nested', function () {
  var Component = function Component() {
    return /*#__PURE__*/React.createElement(Box, {
      p: 2
    }, /*#__PURE__*/React.createElement(Grid, {
      container: true,
      spacing: 4
    }, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(DefaultNestedMenu, null)), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(NestedMenu, {
      menus: getMenus()
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(DefaultNestedMenu, {
      useStyles: useGatsbyNestedMenuStyles
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(NestedMenu, {
      menus: getMenus(),
      useStyles: useGatsbyNestedMenuStyles
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(DefaultNestedMenu, {
      useStyles: useMaterialNestedMenuStyles
    })), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      xs: 4
    }, /*#__PURE__*/React.createElement(DefaultNestedMenu, {
      useStyles: useJupiterNestedMenuStyles
    }))));
  };

  return /*#__PURE__*/React.createElement(Component, null);
});

var getMenus = function getMenus() {
  return [{
    key: 'intro',
    label: 'Introduction'
  }, {
    key: 'quick start',
    label: 'Quick Start'
  }, {
    key: 'recipes',
    label: 'Recipes'
  }, {
    key: 'pluginLib',
    label: 'Plugin Library'
  }, {
    key: 'starterLib',
    label: 'Starter Library'
  }, {
    key: 'resources',
    label: 'Awesome Gatsby Resources'
  }, {
    key: 'refGuides',
    label: 'Reference Guides',
    isToggleOutside: true,
    subMenus: [{
      key: 'preparingEnv',
      label: 'Preparing Your Environment',
      subMenus: [{
        key: 'browserSupport',
        label: 'Browser Support'
      }, {
        key: 'gatsbyWindow',
        label: 'Gatsby on Windows'
      }, {
        key: 'gatsbyLinux',
        label: 'Gatsby on Linux'
      }]
    }, {
      key: 'deployHosting',
      label: 'Deploying & Hosting',
      subMenus: [{
        key: 'preparing',
        label: 'Preparing a Site for Deployment'
      }, {
        key: 'awsAmplify',
        label: 'Deploying to AWS Amplify'
      }, {
        key: 'awsS3',
        label: 'Deploying to S3 and CloudFront'
      }]
    }, {
      key: 'customConfig',
      label: 'Custom Configuration',
      subMenus: [{
        key: 'babeljs',
        label: 'Customizing Babel.js Config'
      }, {
        key: 'babelPluginMacro',
        label: 'Using Babel Plugin Macros'
      }, {
        key: 'customWebpack',
        label: 'Adding a Custom Webpack Config'
      }]
    }]
  }, {
    key: 'api',
    label: 'Gatsby API',
    subMenus: [{
      key: 'themes',
      label: 'Gatsby Themes'
    }, {
      key: 'link',
      label: 'Gatsby Link'
    }, {
      key: 'image',
      label: 'Gatsby Image'
    }, {
      key: 'config',
      label: 'Gatsby Config'
    }]
  }, {
    key: 'migration',
    label: 'Releases & Migration',
    subMenus: [{
      key: 'v2',
      label: 'v2 Release Notes'
    }, {
      key: 'v1',
      label: 'v1 Release Notes'
    }, {
      key: 'v1Tov2',
      label: 'Migration from v1 to v2'
    }, {
      key: 'v0Tov1',
      label: 'Migration from v0 to v1'
    }]
  }];
};