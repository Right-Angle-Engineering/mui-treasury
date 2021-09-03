import { createStyles } from '@mui/material/styles';

var translucentEmailSubscribeStyles = function translucentEmailSubscribeStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return createStyles({
    form: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      flex: 1,
      minWidth: 240,
      alignSelf: 'stretch',
      padding: spacing(0, 1.5),
      backgroundColor: palette.mode === 'dark' ? palette.divider : palette.action.selected,
      color: palette.text.primary,
      border: 'none',
      '&:hover, &:focus': {
        backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : palette.divider
      }
    },
    submit: {
      marginLeft: '0.5rem',
      padding: spacing(1, 3),
      backgroundColor: palette.divider,
      color: palette.text.primary,
      '&:hover': {
        backgroundColor: palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
      }
    }
  });
};

export default translucentEmailSubscribeStyles;