import makeStyles from '@mui/styles/makeStyles';
import { borderedInputBaseStyles, borderedInputLabelStyles } from './borderedTextField.styles';
var borderedTextFieldStylesHook = {
  useInputBase: makeStyles(borderedInputBaseStyles, {
    name: 'BorderedTextField'
  }),
  useInputLabel: makeStyles(borderedInputLabelStyles, {
    name: 'BorderedTextField'
  })
};
export { borderedInputBaseStyles, borderedInputLabelStyles, borderedTextFieldStylesHook };