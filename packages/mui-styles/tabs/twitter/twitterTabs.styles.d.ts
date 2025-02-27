import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    root: {
        width: string;
        boxShadow: string;
    };
    indicator: {
        backgroundColor: string;
    };
};
export declare const tabItemStyles: ({ breakpoints }: Pick<Theme, 'breakpoints'>) => {
    root: {
        [x: string]: number | {
            minWidth: number;
            backgroundColor?: undefined;
            '& $wrapper'?: undefined;
            '& *'?: undefined;
        } | {
            backgroundColor: string;
            '& $wrapper': {
                color: string;
            };
            minWidth?: undefined;
            '& *'?: undefined;
        } | {
            '& *': {
                color: string;
            };
            minWidth?: undefined;
            backgroundColor?: undefined;
            '& $wrapper'?: undefined;
        };
        minHeight: number;
        minWidth: number;
        '&:hover': {
            backgroundColor: string;
            '& $wrapper': {
                color: string;
            };
        };
        '&$selected': {
            '& *': {
                color: string;
            };
        };
    };
    selected: {};
    textColorInherit: {
        opacity: number;
    };
    wrapper: {
        textTransform: string;
        fontSize: number;
        fontWeight: number;
        color: string;
    };
};
