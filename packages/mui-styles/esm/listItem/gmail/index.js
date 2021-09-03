import makeStyles from '@mui/styles/makeStyles';
import gmailListItemStyles from './gmailListItem.styles';
var useGmailListItemStyles = makeStyles(gmailListItemStyles, {
  name: 'GmailListItem'
});
export { gmailListItemStyles, useGmailListItemStyles };
export { default } from './gmailListItem.styles';