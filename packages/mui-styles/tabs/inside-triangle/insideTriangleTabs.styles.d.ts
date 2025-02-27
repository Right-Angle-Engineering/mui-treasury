import { Theme } from '@mui/material';
export declare const tabsStyles: () => {
    indicator: {
        display: string;
    };
};
export declare const tabItemStyles: ({ palette }: Pick<Theme, 'palette'>) => {
    root: ({ bgColor }: {
        bgColor?: string;
    }) => {
        textTransform: string;
        height: number;
        width: number;
        '&:before': {
            position: string;
            top: number;
            left: number;
            content: string;
            height: number;
            width: number;
            background: string;
            transformOrigin: string;
            transform: string;
            boxShadow: string;
            zIndex: number;
        };
    };
    selected: {
        '&$root': {
            opacity: number;
        };
    };
    wrapper: ({ labelColor }: {
        labelColor?: string;
    }) => {
        color: string;
    };
};
