import { Theme } from '@mui/material';
export declare const tabsStyles: ({ spacing }: Theme) => {
    root: {
        width: string;
        borderRadius: string;
        background: string;
        padding: number;
        boxShadow: string;
    };
    indicator: {
        height: string;
        borderRadius: string;
        backgroundColor: string;
    };
};
export declare const tabItemStyles: ({ breakpoints, spacing, }: Pick<Theme, 'breakpoints' | 'spacing'>) => {
    root: {
        [x: string]: string | number | {
            minWidth: number;
        };
        textTransform: string;
        margin: string;
        minWidth: number;
    };
    wrapper: {
        fontWeight: string;
        letterSpacing: number;
        color: string;
    };
};
