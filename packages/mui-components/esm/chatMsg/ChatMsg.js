function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import withStyles from '@mui/styles/withStyles';
import defaultChatMsgStyles from '@mui-treasury/styles/chatMsg/default';
var ChatMsg = withStyles(defaultChatMsgStyles, {
  name: 'ChatMsg'
})(function (props) {
  var classes = props.classes,
      avatar = props.avatar,
      messages = props.messages,
      side = props.side,
      GridContainerProps = props.GridContainerProps,
      GridItemProps = props.GridItemProps,
      AvatarProps = props.AvatarProps,
      getTypographyProps = props.getTypographyProps;

  var attachClass = function attachClass(index) {
    if (index === 0) {
      return classes["".concat(side, "First")];
    }

    if (index === messages.length - 1) {
      return classes["".concat(side, "Last")];
    }

    return '';
  };

  return /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    spacing: 2,
    justify: side === 'right' ? 'flex-end' : 'flex-start'
  }, GridContainerProps), side === 'left' && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true
  }, GridItemProps), /*#__PURE__*/React.createElement(Avatar, _extends({
    src: avatar
  }, AvatarProps, {
    className: cx(classes.avatar, AvatarProps.className)
  }))), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 8
  }, messages.map(function (msg, i) {
    var TypographyProps = getTypographyProps(msg, i, props);
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("div", {
        key: msg.id || i,
        className: classes["".concat(side, "Row")]
      }, /*#__PURE__*/React.createElement(Typography, _extends({
        align: 'left'
      }, TypographyProps, {
        className: cx(classes.msg, classes[side], attachClass(i), TypographyProps.className)
      }), msg))
    );
  })));
});
ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(['left', 'right']),
  GridContainerProps: PropTypes.shape({}),
  GridItemProps: PropTypes.shape({}),
  AvatarProps: PropTypes.shape({}),
  getTypographyProps: PropTypes.func
};
ChatMsg.defaultProps = {
  avatar: '',
  messages: [],
  side: 'left',
  GridContainerProps: {},
  GridItemProps: {},
  AvatarProps: {},
  getTypographyProps: function getTypographyProps() {
    return {};
  }
};
export default ChatMsg;