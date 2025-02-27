import { yellow } from '@mui/material/colors';
export default (function (_ref) {
  var palette = _ref.palette;
  var color = yellow[700];
  var error = '#ff6b81';
  return {
    root: {
      backgroundColor: palette.grey[200],
      transition: '0.3s'
    },
    focused: {
      backgroundColor: palette.common.white,
      boxShadow: "0 0 0 2px ".concat(color)
    },
    error: {
      backgroundColor: '#fff0f0',
      '&$focused': {
        boxShadow: "0 0 0 2px ".concat(error)
      }
    },
    disabled: {
      backgroundColor: palette.grey[50]
    },
    input: {
      padding: '1rem'
    }
  };
});