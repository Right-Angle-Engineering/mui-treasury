import { Theme } from '@mui/material';
export declare type ChatzInfoClassKey = keyof ReturnType<typeof chatzInfoStyles>;
declare const chatzInfoStyles: ({ palette }: Theme) => {
    title: {
        fontFamily: string;
        fontSize: string;
        fontWeight: number;
        lineHeight: number;
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        marginBottom: string;
    };
    caption: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
    };
};
export default chatzInfoStyles;
