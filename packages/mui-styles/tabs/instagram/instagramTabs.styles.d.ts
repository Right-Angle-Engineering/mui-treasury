import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    root: {
        boxShadow: string;
        overflow: string;
    };
    fixed: {
        overflow: string;
    };
    indicator: {
        height: number;
        transform: string;
        backgroundColor: string;
    };
};
export declare const tabItemStyles: ({ breakpoints }: Pick<Theme, 'breakpoints'>) => {
    root: {
        [x: string]: string | number | {
            [x: string]: number | {
                marginRight: number;
            };
            marginRight: number;
            minWidth?: undefined;
        } | {
            minWidth: number;
            marginRight?: undefined;
        };
        lineHeight: string;
        minWidth: number;
        '&:not(:last-child)': {
            [x: string]: number | {
                marginRight: number;
            };
            marginRight: number;
        };
    };
    labelIcon: {
        minHeight: number;
        '& $wrapper > *:first-child': {
            marginBottom: number;
        };
    };
    textColorInherit: {
        opacity: number;
    };
    wrapper: {
        flexDirection: string;
        letterSpacing: string;
        textTransform: string;
        '& svg, .material-icons': {
            fontSize: number;
            marginRight: number;
        };
    };
};
