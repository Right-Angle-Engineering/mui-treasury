function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { blue, blueGrey } from '@mui/material/colors';
import styles from '../../inputBase/bordered/borderedInputBase.styles';
export var borderedInputBaseStyles = function borderedInputBaseStyles(theme) {
  return _extends(_extends({}, styles(theme)), {}, {
    formControl: {
      'label + &': {
        marginTop: 22
      }
    }
  });
};
export var borderedInputLabelStyles = function borderedInputLabelStyles() {
  return {
    root: {
      color: blueGrey[400],
      '&$focused:not($error)': {
        color: blue[700]
      }
    },
    error: {},
    focused: {},
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.9)',
      fontWeight: 500
    }
  };
};