import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { Theme } from '@mui/material';
export declare type GmailButtonStyleProps = {
    collapsed: boolean;
};
export declare type GmailButtonClassKey = 'root' | 'label' | 'img' | 'startIcon';
export declare const gmailButtonStyles: ({ palette }: Theme) => {
    root: ({ collapsed }: GmailButtonStyleProps) => {
        minWidth: number;
        minHeight: number;
        backgroundColor: string;
        padding: string;
        borderRadius: number;
        boxShadow: string;
        '&:hover': {
            boxShadow: string;
            backgroundColor: string;
        };
        '&:active': {
            backgroundColor: string;
        };
    };
    label: {
        fontFamily: string;
        color: string;
        textTransform: "none";
        fontWeight: number;
    };
    img: {
        width: number;
        height: number;
    };
    startIcon: ({ collapsed }: GmailButtonStyleProps) => {
        margin: React.ReactText;
    };
};
export declare type GmailButtonProps = {
    collapsed: boolean;
    classes?: Partial<Record<GmailButtonClassKey, string>>;
} & ButtonProps;
declare const GmailButton: ({ collapsed, classes, ...props }: GmailButtonProps) => JSX.Element;
export default GmailButton;
