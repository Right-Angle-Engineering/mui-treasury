import makeStyles from '@mui/styles/makeStyles';
import { bannerCheckboxStyles, bannerFormControlLabelStyles, bannerSubtitleStyles } from './bannerCheckbox.styles';
var bannerCheckboxStylesHook = {
  useCheckbox: makeStyles(bannerCheckboxStyles, {
    name: 'BannerCheckbox'
  }),
  useFormControlLabel: makeStyles(bannerFormControlLabelStyles, {
    name: 'BannerCheckbox'
  }),
  useSubtitle: makeStyles(bannerSubtitleStyles, {
    name: 'BannerCheckbox'
  })
};
export { bannerCheckboxStyles, bannerFormControlLabelStyles, bannerSubtitleStyles, bannerCheckboxStylesHook };