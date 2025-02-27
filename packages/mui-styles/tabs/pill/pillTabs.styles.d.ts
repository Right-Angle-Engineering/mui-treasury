import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    root: {
        width: string;
    };
    indicator: {
        display: string;
    };
    centered: {
        alignItems: string;
        justifyContent: string;
    };
};
export declare const tabItemStyles: ({ breakpoints }: Pick<Theme, 'breakpoints'>) => {
    root: {
        [x: string]: string | {
            minWidth: number;
            margin?: undefined;
            '&, &:hover'?: undefined;
        } | {
            margin: string;
            minWidth?: undefined;
            '&, &:hover'?: undefined;
        } | {
            '&, &:hover': {
                color: string;
                backgroundColor: string;
                boxShadow: string;
            };
            minWidth?: undefined;
            margin?: undefined;
        };
        position: string;
        display: string;
        borderRadius: string;
        textAlign: string;
        transition: string;
        padding: string;
        color: string;
        height: string;
        opacity: string;
        margin: string;
        float: string;
        '& + button': {
            margin: string;
        };
        '&$selected': {
            '&, &:hover': {
                color: string;
                backgroundColor: string;
                boxShadow: string;
            };
        };
    };
    selected: {};
    wrapper: {
        lineHeight: string;
        textTransform: string;
        fontSize: string;
        fontWeight: string;
        position: string;
        display: string;
        color: string;
    };
};
