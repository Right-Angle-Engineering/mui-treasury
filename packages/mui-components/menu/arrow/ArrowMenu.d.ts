import React from 'react';
import { MenuProps } from '@mui/material/Menu';
export declare const arrowMenuStyles: {
    root: {
        display: string;
        borderRadius: number;
    };
    button: {
        padding: string;
        borderRadius: number;
    };
    arrowBtn: {
        padding: number;
        borderRadius: number;
        width: number;
        marginLeft: number;
        fontSize: number;
        '&:hover': {
            color: string;
        };
    };
    open: {
        backgroundColor: string;
    };
};
export declare type ArrowMenuClassKey = keyof typeof arrowMenuStyles;
export declare type ArrowMenuProps = {
    renderElement: (props: {
        styles: Record<ArrowMenuClassKey, string>;
        onClose: () => void;
    }) => React.ReactNode;
    children: ((props: {
        styles: Record<ArrowMenuClassKey, string>;
        onClose: () => void;
    }) => React.ReactNode) | React.ReactNode;
} & Omit<MenuProps, 'open'>;
declare const ArrowMenu: ({ children, renderElement, ...props }: ArrowMenuProps) => JSX.Element;
export default ArrowMenu;
