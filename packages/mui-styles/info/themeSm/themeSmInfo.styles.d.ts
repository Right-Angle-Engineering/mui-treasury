import { Theme } from '@mui/material/styles';
export declare type ThemeSmInfoClassKey = keyof ReturnType<typeof themeSmInfoStyles>;
declare const themeSmInfoStyles: ({ palette }: Theme) => {
    title: {
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
export default themeSmInfoStyles;
