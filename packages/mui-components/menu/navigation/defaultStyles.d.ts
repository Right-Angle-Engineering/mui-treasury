import { ClassNameMap } from '@mui/styles';
import { Theme } from '@mui/material/styles';
declare type StyleProps = {
    gutter?: string | number;
};
declare type ClassKey = keyof ReturnType<typeof defaultStyles>;
export declare const useDefaultStyles: (props?: StyleProps) => ClassNameMap<ClassKey>;
export default function defaultStyles({ palette, spacing }: Theme): Record<"menu" | "item" | "itemActive", import("@mui/styles").CSSProperties | import("@mui/styles").CreateCSSProperties<StyleProps> | import("@mui/styles").PropsFunc<StyleProps, import("@mui/styles").CreateCSSProperties<StyleProps>>>;
export {};
