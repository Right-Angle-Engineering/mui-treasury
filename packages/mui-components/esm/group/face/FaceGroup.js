import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { useFaceGroupStyles } from '@mui-treasury/styles/group/face';

var FaceGroup = function FaceGroup(_ref) {
  var faces = _ref.faces,
      offset = _ref.offset,
      size = _ref.size;
  var styles = useFaceGroupStyles({
    offset: offset,
    size: size
  });
  return faces.map(function (face) {
    return /*#__PURE__*/React.createElement(Avatar, {
      className: styles.item,
      key: face,
      src: face
    });
  });
};

FaceGroup.propTypes = {
  faces: PropTypes.arrayOf(PropTypes.string),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FaceGroup.defaultProps = {
  offset: undefined,
  // spacing unit
  size: undefined // spacing unit

};
export default FaceGroup;