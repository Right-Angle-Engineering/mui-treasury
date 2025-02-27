import { Theme } from '@mui/material/styles';
export declare type GmailTabsStyleProps = {
    indicatorColors?: Array<string>;
};
export declare type GmailTabsClassKey = keyof ReturnType<typeof tabsStyles>;
export declare const tabsStyles: () => {
    root: {
        width: string;
        backgroundColor: string;
        boxShadow: string;
    };
    indicator: ({ indicatorColors }: {
        indicatorColors?: any[];
    }) => {
        height: number;
        backgroundColor: string;
        '& > div': any;
    };
};
export declare type GmailTabItemStyleProps = {
    color?: string;
};
export declare type GmailTabItemClassKey = keyof ReturnType<typeof tabItemStyles>;
export declare const tabItemStyles: ({ palette }: Theme) => {
    root: {
        opacity: number;
        '&:hover': {
            backgroundColor: string;
        };
        '&:hover,&:focus': {
            '& $wrapper': {
                color: string;
            };
        };
        minHeight: number;
        flex: number;
        maxWidth: number;
        padding: string;
    };
    labelIcon: {
        '& $wrapper > *:first-child': {
            marginBottom: number;
            marginRight: number;
            fontSize: number;
        };
    };
    wrapper: ({ color }: GmailTabItemStyleProps) => {
        color: string;
        flexDirection: "row";
        justifyContent: string;
        fontSize: number;
        fontFamily: string;
        textTransform: "initial";
        '& .MuiTabItem-labelGroup': {
            minWidth: number;
        };
        '& .MuiTabItem-label': {
            display: string;
            alignItems: string;
        };
        '& .MuiTabItem-subLabel': {
            color: string;
            fontSize: string;
            textAlign: string;
            fontWeight: string;
            whiteSpace: "nowrap";
            overflow: string;
            textOverflow: string;
        };
        '& .MuiTabItem-tag': {
            backgroundColor: string;
            color: string;
            fontSize: string;
            borderRadius: number;
            lineHeight: string;
            padding: string;
            letterSpacing: number;
            marginLeft: number;
            whiteSpace: "nowrap";
        };
    };
    selected: ({ color }: GmailTabItemStyleProps) => {
        '& $wrapper': {
            color: string;
        };
    };
};
