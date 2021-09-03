import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import { TabProps } from '@mui/material/Tab';
import { TabsTypeMap } from '@mui/material/Tabs';
import { OverridableComponent } from '../../_types';
export interface GmailTabItemProps extends TabProps {
    color?: string;
    label: React.ReactNode;
    subLabel?: React.ReactNode;
    tag?: React.ReactNode;
}
export declare const GmailTabItem: ({ color, label, subLabel, tag, ...props }: GmailTabItemProps) => JSX.Element;
export declare type GmailTabsTypeMap<P = {}, D extends React.ElementType = typeof ButtonBase> = TabsTypeMap<{
    indicatorColors?: Array<string>;
    children: React.ReactElement | React.ReactElement[];
}, D>;
export declare const GmailTabs: OverridableComponent<GmailTabsTypeMap>;
declare const _default: {
    Tabs: OverridableComponent<GmailTabsTypeMap<{}, import("@mui/material/ButtonBase").ExtendButtonBase<import("@mui/material/ButtonBase").ButtonBaseTypeMap<{}, "button">>>>;
    Tab: ({ color, label, subLabel, tag, ...props }: GmailTabItemProps) => JSX.Element;
};
export default _default;
