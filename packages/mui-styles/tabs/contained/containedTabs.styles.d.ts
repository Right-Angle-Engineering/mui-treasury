import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    indicator: {
        display: string;
    };
};
export declare const tabItemStyles: ({ palette, breakpoints, }: Pick<Theme, 'breakpoints' | 'palette'>) => {
    root: ({ bgColor, minWidth, selectedBgColor, }: {
        bgColor?: string;
        minWidth?: {
            md: number;
        };
        selectedBgColor?: string;
    }) => {
        [x: string]: string | number | {
            minWidth: number;
            transition?: undefined;
            '&:before'?: undefined;
            opacity?: undefined;
            '&:not($selected)'?: undefined;
            '&::before'?: undefined;
            '& + $root:before'?: undefined;
        } | {
            transition: string;
            minWidth?: undefined;
            '&:before'?: undefined;
            opacity?: undefined;
            '&:not($selected)'?: undefined;
            '&::before'?: undefined;
            '& + $root:before'?: undefined;
        } | {
            '&:before': {
                content: string;
                position: string;
                left: number;
                display: string;
                height: number;
                width: number;
                zIndex: number;
                backgroundColor: string;
            };
            minWidth?: undefined;
            transition?: undefined;
            opacity?: undefined;
            '&:not($selected)'?: undefined;
            '&::before'?: undefined;
            '& + $root:before'?: undefined;
        } | {
            opacity: number;
            minWidth?: undefined;
            transition?: undefined;
            '&:before'?: undefined;
            '&:not($selected)'?: undefined;
            '&::before'?: undefined;
            '& + $root:before'?: undefined;
        } | {
            '&:not($selected)': {
                backgroundColor: string;
            };
            '&::before': {
                opacity: number;
            };
            '& + $root:before': {
                opacity: number;
            };
            minWidth?: undefined;
            transition?: undefined;
            '&:before'?: undefined;
            opacity?: undefined;
        };
        opacity: number;
        overflow: string;
        color: string;
        backgroundColor: string;
        transition: string;
        '&:before': {
            transition: string;
        };
        '&:not(:first-of-type)': {
            '&:before': {
                content: string;
                position: string;
                left: number;
                display: string;
                height: number;
                width: number;
                zIndex: number;
                backgroundColor: string;
            };
        };
        '& + $selected:before': {
            opacity: number;
        };
        '&:hover': {
            '&:not($selected)': {
                backgroundColor: string;
            };
            '&::before': {
                opacity: number;
            };
            '& + $root:before': {
                opacity: number;
            };
        };
    };
    selected: ({ selectedBgColor }: {
        selectedBgColor?: string;
    }) => {
        backgroundColor: string;
        color: string;
        '& + $root': {
            zIndex: number;
        };
        '& + $root:before': {
            opacity: number;
        };
    };
    wrapper: {
        zIndex: number;
        textTransform: string;
    };
};
