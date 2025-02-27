import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
export var useDefaultStyles = makeStyles(defaultStyles, {
  name: 'CategoryMenu'
});
export default function defaultStyles(_ref) {
  var palette = _ref.palette,
      spacing = _ref.spacing;
  return createStyles({
    title: {
      marginBottom: '0.5em',
      cursor: 'default',
      fontSize: '1rem',
      color: palette.text.primary,
      letterSpacing: '0.75px'
    },
    item: {
      display: 'block',
      color: palette.text.secondary,
      cursor: 'pointer',
      marginBottom: '0.125rem',
      '&:hover, &:focus': {
        color: palette.text.primary
      }
    },
    itemActive: {
      '&$item': {
        color: palette.text.primary
      }
    }
  });
}