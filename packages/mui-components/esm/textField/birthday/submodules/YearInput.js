import createInput from './createInput';
import makeStyles from '@mui/styles/makeStyles';
var useStyles = makeStyles(function () {
  return {
    root: {
      width: 48,
      paddingLeft: 2,
      paddingRight: 2
    }
  };
}, {
  name: 'YearInput'
});
export default createInput({
  displayName: 'YearInput',
  useStyles: useStyles,
  fieldName: 'year',
  updaterName: 'changeYear',
  maxLength: 4
});