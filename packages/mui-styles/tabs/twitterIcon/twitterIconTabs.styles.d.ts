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
export declare const tabItemStyles: ({ breakpoints }: Theme) => {
    root: {
        [x: string]: number | {
            minWidth: number;
            '& .MuiTab-label'?: undefined;
            '& *'?: undefined;
            '& .MuiTab-wrapper'?: undefined;
        } | {
            '& .MuiTab-label': {
                color: string;
            };
            minWidth?: undefined;
            '& *'?: undefined;
            '& .MuiTab-wrapper'?: undefined;
        } | {
            '& *': {
                color: string;
            };
            minWidth?: undefined;
            '& .MuiTab-label'?: undefined;
            '& .MuiTab-wrapper'?: undefined;
        } | {
            '& .MuiTab-wrapper': {
                width: string;
                padding: number;
                borderRadius: number;
                color: string;
                '&:hover': {
                    color: string;
                    backgroundColor: string;
                };
            };
            minWidth?: undefined;
            '& .MuiTab-label'?: undefined;
            '& *'?: undefined;
        };
        minHeight: number;
        minWidth: number;
        '&:hover': {
            '& .MuiTab-label': {
                color: string;
            };
        };
        '&$selected': {
            '& *': {
                color: string;
            };
        };
        '&.MuiTab--iconOnly': {
            '& .MuiTab-wrapper': {
                width: string;
                padding: number;
                borderRadius: number;
                color: string;
                '&:hover': {
                    color: string;
                    backgroundColor: string;
                };
            };
        };
    };
    textColorInherit: {
        opacity: number;
    };
    wrapper: {
        textTransform: string;
        fontSize: number;
        fontWeight: number;
        color: string;
        '& svg, .material-icons': {
            fontSize: number;
        };
    };
};
export declare const badgeStyles: ({ palette }: Pick<Theme, 'palette'>) => {
    root: {
        "&.MuiBadge--dotted, &.MuiBadge--number": {
            '& .MuiBadge-badge': {
                color: string;
                backgroundColor: string;
            };
        };
        "&.MuiBadge--dotted .MuiBadge-badge": {
            minWidth: number;
            height: number;
            top: number;
            right: number;
            padding: number;
        };
        "&.MuiBadge--number .MuiBadge-badge": {
            top: number;
            right: number;
            boxShadow: string;
            minWidth: number;
            height: number;
            fontSize: number;
            fontWeight: string;
        };
    };
    colorPrimary: {
        color: string;
    };
};
