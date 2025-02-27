"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _makeStyles = _interopRequireDefault(require("@mui/styles/makeStyles"));

var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));

var _Remove = _interopRequireDefault(require("@mui/icons-material/Remove"));

var _CollapsibleMenu = _interopRequireDefault(require("./CollapsibleMenu"));

var _switch = _interopRequireDefault(require("../../toggle/switch"));

var _row = _interopRequireDefault(require("../../toggle/row"));

var _cute = require("@mui-treasury/styles/switchToggle/cute");

var _gatsby = require("@mui-treasury/styles/rowToggle/gatsby");

var _gatsby2 = require("@mui-treasury/styles/listItem/gatsby");

var _material = require("@mui-treasury/styles/rowToggle/material");

var _material2 = require("@mui-treasury/styles/listItem/material");

var _material3 = require("@mui-treasury/styles/collapsibleMenu/material");

var _jupiter = require("@mui-treasury/styles/collapsibleMenu/jupiter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(function () {
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
(0, _react2.storiesOf)('mui-components|Menu', module).add('collapsible', function () {
  var Component = function Component() {
    var cuteToggleStyles = (0, _cute.useCuteSwitchToggleStyles)();
    var classes = useStyles();
    var gatsbyListItemStyles = (0, _gatsby2.useGatsbyListItemStyles)();
    var materialListItemStyles = (0, _material2.useMaterialListItemStyles)();
    return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 4,
      className: classes.root
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      renderToggle: function renderToggle(_ref) {
        var onClick = _ref.onClick,
            collapsed = _ref.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          button: true,
          onClick: onClick
        }, "Toggler ", /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          toggled: collapsed
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 1"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 2"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 3"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      renderToggle: function renderToggle(_ref2) {
        var onClick = _ref2.onClick,
            collapsed = _ref2.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "Category header"), /*#__PURE__*/_react["default"].createElement(_row["default"].Action, {
          button: true,
          toggled: collapsed,
          classes: cuteToggleStyles,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 1"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 2"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 3"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      renderToggle: function renderToggle(_ref3) {
        var onClick = _ref3.onClick,
            collapsed = _ref3.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_row["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          className: classes.ex2Item
        }, "Category header"), /*#__PURE__*/_react["default"].createElement(_row["default"].Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 1"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 2"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      renderToggle: function renderToggle(_ref4) {
        var onClick = _ref4.onClick,
            collapsed = _ref4.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          button: true,
          onClick: onClick
        }, "Toggler", ' ', /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          toggled: collapsed,
          className: classes.ex3nestedToggle
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 1.2"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 2.2")), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      renderToggle: function renderToggle(_ref5) {
        var onClick = _ref5.onClick,
            collapsed = _ref5.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_row["default"], {
          useStyles: _gatsby.useGatsbyRowToggleStyles
        }, /*#__PURE__*/_react["default"].createElement(_row["default"].ListItem, {
          button: true,
          selected: true
        }, "Gatsby styles"), /*#__PURE__*/_react["default"].createElement(_row["default"].Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: gatsbyListItemStyles
    }, "List item 1"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: gatsbyListItemStyles,
      selected: true,
      button: true
    }, "List item 2"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: gatsbyListItemStyles
    }, "List item 3"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: gatsbyListItemStyles
    }, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      renderToggle: function renderToggle(_ref6) {
        var onClick = _ref6.onClick,
            collapsed = _ref6.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_row["default"], {
          useStyles: _material.useMaterialRowToggleStyles
        }, /*#__PURE__*/_react["default"].createElement(_row["default"].ListItem, {
          button: true
        }, "Material with icon"), /*#__PURE__*/_react["default"].createElement(_row["default"].Action, {
          button: true,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/_react["default"].createElement(_Remove["default"], null) : /*#__PURE__*/_react["default"].createElement(_Add["default"], null)));
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: materialListItemStyles
    }, "List item 1"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: materialListItemStyles,
      selected: true
    }, "List item 2"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: materialListItemStyles
    }, "List item 3"), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      classes: materialListItemStyles
    }, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      useStyles: _material3.useMaterialCollapsibleMenuStyles,
      renderToggle: function renderToggle(_ref7) {
        var onClick = _ref7.onClick,
            collapsed = _ref7.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].RowItem, {
          button: true,
          selected: true
        }, "Material with icon"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/_react["default"].createElement(_Remove["default"], null) : /*#__PURE__*/_react["default"].createElement(_Add["default"], null)));
      }
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 1"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, {
      selected: true
    }, "List item 2"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 3"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 4"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      xs: 4
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"], {
      collapsed: true,
      useStyles: _jupiter.useJupiterCollapsibleMenuStyles,
      renderToggle: function renderToggle(_ref8) {
        var onClick = _ref8.onClick,
            collapsed = _ref8.collapsed;
        return /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].RowItem, {
          button: true,
          selected: true
        }, "Jupiter with icon"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].Action, {
          button: true,
          toggled: collapsed,
          onClick: onClick
        }, collapsed ? /*#__PURE__*/_react["default"].createElement(_Remove["default"], null) : /*#__PURE__*/_react["default"].createElement(_Add["default"], null)));
      }
    }, /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 1"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, {
      selected: true
    }, "List item 2"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 3"), /*#__PURE__*/_react["default"].createElement(_CollapsibleMenu["default"].ListItem, null, "List item 4"))));
  };

  return /*#__PURE__*/_react["default"].createElement(Component, null);
});