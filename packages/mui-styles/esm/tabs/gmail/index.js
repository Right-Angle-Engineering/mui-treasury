import makeStyles from '@mui/styles/makeStyles';
import { tabsStyles, tabItemStyles } from './gmailTabs.styles';
export { tabsStyles as gmailTabsStyles, tabItemStyles as gmailTabItemStyles };
export var useGmailTabsStyles = makeStyles(tabsStyles);
export var useGmailTabItemStyles = makeStyles(tabItemStyles);