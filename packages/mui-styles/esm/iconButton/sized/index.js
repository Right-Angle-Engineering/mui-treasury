import makeStyles from '@mui/styles/makeStyles';
import sizedIconButtonStyles from './sizedIconButton.styles';
var useSizedIconButtonStyles = makeStyles(sizedIconButtonStyles, {
  name: 'SizedIconButton'
});
export { sizedIconButtonStyles, useSizedIconButtonStyles };
export * from './sizedIconButton.styles'; // export types

export { default } from './sizedIconButton.styles';