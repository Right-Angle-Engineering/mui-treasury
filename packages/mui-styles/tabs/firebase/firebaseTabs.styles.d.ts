import { Theme } from '@mui/material';
export declare const tabsStyles: ({ spacing, palette, }: Pick<Theme, 'spacing' | 'palette'>) => {
    root: {
        marginLeft: string;
    };
    indicator: {
        height: number;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
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
    };
};
