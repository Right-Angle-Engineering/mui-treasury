import { Theme } from '@mui/material/styles';
export declare type ThemeLgInfoClassKey = keyof ReturnType<typeof themeLgInfoStyles>;
declare const themeLgInfoStyles: ({ palette }: Theme) => {
    title: {
        fontWeight: 500;
        fontSize: string;
        lineHeight: number;
    };
    subtitle: {
        color: string;
        fontSize: string;
        lineHeight: number;
    };
    caption: {
        color: string;
        fontSize: string;
        lineHeight: number;
        '&:not(:last-child)': {
            marginBottom: string;
        };
    };
};
export default themeLgInfoStyles;
