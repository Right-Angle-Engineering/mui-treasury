import { createStyles } from '@mui/material/styles';

var magCategoryMenuStyles = function magCategoryMenuStyles(_ref) {
  var palette = _ref.palette;
  return createStyles({
    title: {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'uppercase',
      marginBottom: '0.75em',
      fontSize: '0.75rem',
      letterSpacing: '2px',
      fontWeight: 'bold',
      color: palette.text.primary,
      lineHeight: 1.5
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
      color: palette.text.secondary,
      lineHeight: 1.8,
      marginBottom: '0.375em',
      cursor: 'pointer',
      '&:hover, &:focus': {
        color: palette.text.primary
      }
    }
  });
};

export default magCategoryMenuStyles;