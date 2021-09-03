import { Theme } from '@mui/material/styles';
export declare type PlainNavigationMenuStyleProps = {
    gutter?: string | number;
};
export declare type PlainNavigationMenuClassKey = keyof ReturnType<typeof plainNavigationMenuStyles>;
declare const plainNavigationMenuStyles: ({ palette, spacing }: Theme) => never;
export default plainNavigationMenuStyles;
