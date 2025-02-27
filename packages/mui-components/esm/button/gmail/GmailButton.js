function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
export var gmailButtonStyles = function gmailButtonStyles(_ref) {
  var palette = _ref.palette;
  return {
    root: function root(_ref2) {
      var collapsed = _ref2.collapsed;
      return {
        minWidth: collapsed ? 56 : 64,
        minHeight: collapsed ? 56 : 48,
        backgroundColor: palette.common.white,
        padding: "8px ".concat(collapsed ? '8px' : '24px', " 8px ").concat(collapsed ? '8px' : '16px'),
        borderRadius: 40,
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
        '&:hover': {
          boxShadow: '0 1px 3px 0 rgba(60,64,67,0.302), 0 4px 8px 3px rgba(60,64,67,0.149)',
          backgroundColor: '#fafafb'
        },
        '&:active': {
          backgroundColor: '#f1f3f4'
        }
      };
    },
    label: {
      fontFamily: "'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
      color: '#3c4043',
      textTransform: 'none',
      fontWeight: 500
    },
    img: {
      width: 32,
      height: 32
    },
    startIcon: function startIcon(_ref3) {
      var collapsed = _ref3.collapsed;
      return {
        margin: collapsed ? 0 : ''
      };
    }
  };
};
var useStyles = makeStyles(gmailButtonStyles, {
  name: 'GmailButton'
});

var GmailButton = function GmailButton(_ref4) {
  var collapsed = _ref4.collapsed,
      classes = _ref4.classes,
      props = _objectWithoutProperties(_ref4, ["collapsed", "classes"]);

  var styles = useStyles(_extends({
    collapsed: collapsed
  }, props));

  var imgClassName = styles.img,
      buttonClasses = _objectWithoutProperties(styles, ["img"]);

  return /*#__PURE__*/React.createElement(Button, _extends({
    disableRipple: true
  }, props, {
    classes: buttonClasses,
    startIcon: /*#__PURE__*/React.createElement(Avatar, {
      className: imgClassName,
      src: 'https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png'
    })
  }), !collapsed && 'Compose');
};

export default GmailButton;