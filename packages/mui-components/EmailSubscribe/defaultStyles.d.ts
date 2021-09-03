import { ClassNameMap } from '@mui/styles';
import { Theme } from '@mui/material/styles';
declare type StyleProps = {};
declare type ClassKey = keyof ReturnType<typeof defaultStyles>;
export declare const useDefaultStyles: (props?: StyleProps) => ClassNameMap<ClassKey>;
export default function defaultStyles({ palette, spacing }: Theme): Record<"form" | "input" | "submit", import("@mui/styles").CSSProperties | import("@mui/styles").CreateCSSProperties<{}> | import("@mui/styles").PropsFunc<{}, import("@mui/styles").CreateCSSProperties<{}>>>;
export {};
