import { Theme } from '@mui/material';
export declare type TrendInfoClassKey = keyof ReturnType<typeof trendInfoStyles>;
declare const trendInfoStyles: ({ palette }: Theme) => {
    title: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        color: string;
        marginBottom: string;
    };
    subtitle: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
        letterSpacing: string;
        color: string;
    };
};
export default trendInfoStyles;
