import { ClassNameMap } from '@mui/styles';
import { tabsStyles, tabItemStyles, GmailTabsStyleProps, GmailTabsClassKey, GmailTabItemStyleProps, GmailTabItemClassKey } from './gmailTabs.styles';
export { tabsStyles as gmailTabsStyles, tabItemStyles as gmailTabItemStyles };
export declare const useGmailTabsStyles: (props?: GmailTabsStyleProps) => ClassNameMap<GmailTabsClassKey>;
export declare const useGmailTabItemStyles: (props?: GmailTabItemStyleProps) => ClassNameMap<GmailTabItemClassKey>;
