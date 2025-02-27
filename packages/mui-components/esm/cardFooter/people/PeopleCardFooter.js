import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';
import { usePeopleCardFooterStyles } from '@mui-treasury/styles/cardFooter/people';
import FaceGroup from '../../group/face';

var PeopleCardFooter = function PeopleCardFooter(_ref) {
  var faces = _ref.faces,
      noDivider = _ref.noDivider;
  var styles = usePeopleCardFooterStyles();
  return /*#__PURE__*/React.createElement(React.Fragment, null, !noDivider && /*#__PURE__*/React.createElement(Divider, {
    className: styles.divider,
    light: true
  }), /*#__PURE__*/React.createElement(FaceGroup, {
    faces: faces
  }));
};

PeopleCardFooter.propTypes = {
  faces: PropTypes.arrayOf(PropTypes.string),
  noDivider: PropTypes.bool
};
PeopleCardFooter.defaultProps = {
  faces: [],
  noDivider: false
};
export default PeopleCardFooter;