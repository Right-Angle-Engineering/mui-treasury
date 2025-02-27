import React from 'react';
import { Item, Row } from './index';
import AvatarGroup from '@mui/lab/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
export default (function () {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Row, {
    gap: 2,
    position: 'bottom'
  }, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(AvatarGroup, {
    max: 4
  }, new Array(5).fill(0).map(function (_, index) {
    return /*#__PURE__*/React.createElement(Avatar, {
      key: index,
      src: "https://i.pravatar.cc/300?img=".concat(Math.floor(Math.random() * 30))
    });
  }))), /*#__PURE__*/React.createElement(Item, {
    position: 'middle-right'
  }, /*#__PURE__*/React.createElement(Button, {
    variant: 'contained',
    color: 'primary',
    disableRipple: true
  }, "Join group"))));
});