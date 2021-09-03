import { Theme } from '@mui/material/styles';
export declare type LineNavigationMenuStyleProps = {
    gutter?: string | number;
};
export declare type LineNavigationMenuClassKey = keyof ReturnType<typeof lineNavigationMenuStyles>;
declare const lineNavigationMenuStyles: ({ spacing, palette }: Theme) => never;
export default lineNavigationMenuStyles;
