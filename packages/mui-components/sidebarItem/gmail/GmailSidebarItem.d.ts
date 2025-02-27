import React from 'react';
import { ButtonBaseProps } from '@mui/material/ButtonBase';
import { GmailSidebarClassKey } from './gmailSidebarItem.styles';
export declare type GmailSidebarItemProps = {
    startIcon: React.ReactElement;
    label: React.ReactNode;
    amount?: React.ReactNode;
    collapsed?: boolean;
    dotOnCollapsed?: boolean;
    selected?: boolean;
    onClick: ButtonBaseProps['onClick'];
    color?: string;
    classes?: Partial<Record<GmailSidebarClassKey, string>>;
    className?: string;
    ButtonBaseProps?: ButtonBaseProps;
};
declare const GmailSidebarItem: ({ color, startIcon, label, amount, ButtonBaseProps, classes, collapsed, dotOnCollapsed, selected, onClick, }: GmailSidebarItemProps) => JSX.Element;
export default GmailSidebarItem;
