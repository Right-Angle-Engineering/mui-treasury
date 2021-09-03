import { Theme } from '@mui/material';
export declare type NewsInfoClassKey = keyof ReturnType<typeof newsInfoStyles>;
declare const newsInfoStyles: ({ palette }: Theme) => {
    title: {
        fontFamily: string;
        fontSize: string;
        lineHeight: number;
    };
    subtitle: {
        fontFamily: string;
        color: string;
        fontSize: string;
        lineHeight: number;
    };
};
export default newsInfoStyles;
