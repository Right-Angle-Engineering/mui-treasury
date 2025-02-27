import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    root: {
        overflow: string;
    };
    scroller: {
        overflow: string;
    };
    indicator: {
        display: string;
    };
};
export declare const tabItemStyles: ({ palette, spacing, breakpoints, }: Pick<Theme, 'breakpoints' | 'palette' | 'spacing'>) => {
    root: ({ bgColor, minWidth }: {
        bgColor?: string;
        minWidth?: {
            md: number;
        };
    }) => {
        [x: string]: string | number | {
            minWidth: number;
            content?: undefined;
            position?: undefined;
            top?: undefined;
            bottom?: undefined;
            right?: undefined;
            left?: undefined;
            backgroundColor?: undefined;
            transform?: undefined;
            transformOrigin?: undefined;
            pointerEvents?: undefined;
            transition?: undefined;
            display?: undefined;
            width?: undefined;
            zIndex?: undefined;
            background?: undefined;
        } | {
            content: string;
            position: string;
            top: number;
            bottom: number;
            right: number;
            left: number;
            backgroundColor: string;
            transform: string;
            transformOrigin: string;
            minWidth?: undefined;
            pointerEvents?: undefined;
            transition?: undefined;
            display?: undefined;
            width?: undefined;
            zIndex?: undefined;
            background?: undefined;
        } | {
            pointerEvents: string;
            transition: string;
            content: string;
            position: string;
            top: number;
            bottom: number;
            right: number;
            transform: string;
            display: string;
            width: number;
            zIndex: number;
            background: string;
            minWidth?: undefined;
            left?: undefined;
            backgroundColor?: undefined;
            transformOrigin?: undefined;
        };
        opacity: number;
        overflow: string;
        minHeight: string;
        color: string;
        background: string;
        transition: string;
        '&:before': {
            content: string;
            position: string;
            top: number;
            bottom: number;
            right: number;
            left: number;
            backgroundColor: string;
            transform: string;
            transformOrigin: string;
        };
        '&:after': {
            pointerEvents: string;
            transition: string;
            content: string;
            position: string;
            top: number;
            bottom: number;
            right: number;
            transform: string;
            display: string;
            width: number;
            zIndex: number;
            background: string;
        };
    };
    selected: ({ selectedBgColor }: {
        selectedBgColor?: string;
    }) => {
        color: string;
        zIndex: number;
        '&:before': {
            backgroundColor: string;
            boxShadow: string;
        };
        '&:after': {
            width: string;
        };
    };
    wrapper: {
        zIndex: number;
        marginTop: string;
        textTransform: string;
    };
};
