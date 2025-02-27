import makeStyles from '@mui/styles/makeStyles';
import { bootstrapLabelStyles, bootstrapInputStyles, bootstrapHelperTextStyles } from './bootstrap';
import { filledInputStyles, filledHelperTextStyles } from './filled';
var bootstrapTextFieldHook = {
  useLabel: makeStyles(bootstrapLabelStyles),
  useInput: makeStyles(bootstrapInputStyles),
  useHelperText: makeStyles(bootstrapHelperTextStyles)
};
var filledTextFieldHook = {
  useInput: makeStyles(filledInputStyles),
  useHelperText: makeStyles(filledHelperTextStyles)
};
export { bootstrapTextFieldHook, filledTextFieldHook };