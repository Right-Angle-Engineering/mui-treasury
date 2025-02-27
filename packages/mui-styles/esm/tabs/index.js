import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import * as chromeTabsStyles from './chrome/chromeTabs.styles';
import * as containedTabsStyles from './contained/containedTabs.styles';
import * as elevatedTabsStyles from './elevated/elevatedTabs.styles';
import * as firebaseTabsStyles from './firebase/firebaseTabs.styles';
import * as insideTriangleTabsStyles from './inside-triangle/insideTriangleTabs.styles';
import * as instagramTabsStyles from './instagram/instagramTabs.styles';
import * as pillTabsStyles from './pill/pillTabs.styles';
import * as serratedTabsStyles from './serrated/serratedTabs.styles';
import * as twitterIconTabsStyles from './twitterIcon/twitterIconTabs.styles';
import * as twitterTabsStyles from './twitter/twitterTabs.styles';
import * as appleTabs from './apple/appleTabs.styles';
import * as plain from './plain';
var plainTabsStylesHook = {
  useTabs: makeStyles(plain.tabsStyles),
  useTabItem: makeStyles(plain.tabItemStyles)
};
var chromeTabsStylesHook = {
  useTabs: makeStyles(chromeTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(chromeTabsStyles.tabItemStyles))
};
var containedTabsStylesHook = {
  useTabs: makeStyles(containedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(containedTabsStyles.tabItemStyles))
};
var elevatedTabsStylesHook = {
  useTabs: makeStyles(elevatedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(elevatedTabsStyles.tabItemStyles))
};
var firebaseTabsStylesHook = {
  useTabs: makeStyles(firebaseTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(firebaseTabsStyles.tabItemStyles))
};
var insideTriangleTabsStylesHook = {
  useTabs: makeStyles(insideTriangleTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(insideTriangleTabsStyles.tabItemStyles))
};
var instagramTabsStylesHook = {
  useTabs: makeStyles(instagramTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(instagramTabsStyles.tabItemStyles))
};
var pillTabsStylesHook = {
  useTabs: makeStyles(pillTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(pillTabsStyles.tabItemStyles))
};
var serratedTabsStylesHook = {
  useTabs: makeStyles(serratedTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(serratedTabsStyles.tabItemStyles))
};
var twitterIconTabsStylesHook = {
  useTabs: makeStyles(twitterIconTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(twitterIconTabsStyles.tabItemStyles)),
  useBadge: makeStyles(twitterIconTabsStyles.badgeStyles)
};
var twitterTabsStylesHook = {
  useTabs: makeStyles(twitterTabsStyles.tabsStyles),
  useTabItem: makeStyles(createStyles(twitterTabsStyles.tabItemStyles))
};
var appleTabsStylesHook = {
  useTabs: makeStyles(createStyles(appleTabs.tabsStyles)),
  useTabItem: makeStyles(createStyles(appleTabs.tabItemStyles))
};
export * from './gmail';
export { chromeTabsStylesHook, containedTabsStylesHook, elevatedTabsStylesHook, firebaseTabsStylesHook, insideTriangleTabsStylesHook, instagramTabsStylesHook, pillTabsStylesHook, plainTabsStylesHook, serratedTabsStylesHook, twitterIconTabsStylesHook, twitterTabsStylesHook, appleTabsStylesHook };