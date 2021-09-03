import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import brandCardHeaderStyles from '@mui-treasury/styles/cardHeader/brand';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
var BrandCardHeader = withStyles(brandCardHeaderStyles, {
  name: 'BrandCardHeader'
})(function (_ref) {
  var classes = _ref.classes,
      image = _ref.image,
      extra = _ref.extra;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.header
  }, /*#__PURE__*/React.createElement(Avatar, {
    alt: 'brand logo',
    className: classes.avatar,
    src: image
  }), /*#__PURE__*/React.createElement(Typography, {
    className: classes.extra
  }, extra)), /*#__PURE__*/React.createElement("hr", {
    className: classes.divider
  }));
});
BrandCardHeader.propTypes = {
  image: PropTypes.string,
  extra: PropTypes.string
};
BrandCardHeader.defaultProps = {
  image: '',
  extra: ''
};
export default BrandCardHeader;