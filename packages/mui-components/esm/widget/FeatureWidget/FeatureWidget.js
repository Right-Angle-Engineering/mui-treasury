import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import styles from './featureWidget.styles';
var FeatureWidget = withStyles(styles, {
  name: 'FeatureWidget'
})(function (props) {
  var classes = props.classes,
      renderIcon = props.renderIcon,
      title = props.title,
      content = props.content,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: classes.root
  }, renderIcon && /*#__PURE__*/React.createElement("div", {
    className: classes.iconWrapper
  }, renderIcon({
    className: classes.icon
  })), /*#__PURE__*/React.createElement("h2", {
    className: classes.title,
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: classes.content,
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), typeof children === 'function' ? children({
    className: classes.bottom
  }) : children);
});
FeatureWidget.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  renderIcon: PropTypes.func
};
FeatureWidget.defaultProps = {
  title: '',
  content: '',
  renderIcon: undefined
};
export default FeatureWidget;