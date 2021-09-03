import makeStyles from '@mui/styles/makeStyles';
import rowGutterStyles from './rowGutter.styles';
var useRowGutterStyles = makeStyles(rowGutterStyles, {
  name: 'RowGutter'
});
export { rowGutterStyles, useRowGutterStyles };
export * from './rowGutter.styles';
export { default } from './rowGutter.styles';