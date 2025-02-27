import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '@mui/material/Container';
import ChatMsg from './ChatMsg';
storiesOf('mui-components|Chat Message', module).add('ChatMsg', function () {
  return /*#__PURE__*/React.createElement(Container, {
    maxWidth: 'xs'
  }, /*#__PURE__*/React.createElement(ChatMsg, {
    avatar: '',
    messages: ['Hi Jenny, How r u today?', 'Did you train yesterday', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.']
  }), /*#__PURE__*/React.createElement(ChatMsg, {
    side: 'right',
    messages: ["Great! What's about you?", 'Of course I did. Speaking of which check this out']
  }), /*#__PURE__*/React.createElement(ChatMsg, {
    avatar: '',
    messages: ['Im good.', 'See u later.']
  }));
});