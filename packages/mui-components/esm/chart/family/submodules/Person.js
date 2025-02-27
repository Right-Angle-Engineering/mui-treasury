import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useTreeStyles } from '../../tree';

var Person = function Person(_ref) {
  var displayName = _ref.displayName,
      photoURL = _ref.photoURL;
  var classes = useTreeStyles();
  return /*#__PURE__*/React.createElement(Box, {
    align: 'center',
    lineHeight: 1
  }, /*#__PURE__*/React.createElement(Avatar, {
    alt: displayName,
    src: photoURL,
    className: classes.personAvatar
  }), /*#__PURE__*/React.createElement(Box, {
    mt: 0.5,
    mb: 1,
    minHeight: 12,
    position: 'relative',
    mx: 'auto',
    align: 'center'
  }, displayName && /*#__PURE__*/React.createElement("p", {
    className: classes.personName
  }, displayName)), /*#__PURE__*/React.createElement("div", null));
};

Person.propTypes = {
  displayName: PropTypes.string,
  photoURL: PropTypes.string
};
Person.defaultProps = {
  displayName: undefined,
  photoURL: undefined
};
export default Person;