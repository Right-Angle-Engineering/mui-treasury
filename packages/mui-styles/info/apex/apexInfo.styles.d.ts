import { Theme } from '@mui/material';
export declare type ApexInfoClassKey = keyof ReturnType<typeof apexInfoStyles>;
declare const apexInfoStyles: ({ palette }: Theme) => {
    title: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        letterSpacing: string;
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        letterSpacing: number;
    };
};
export default apexInfoStyles;
