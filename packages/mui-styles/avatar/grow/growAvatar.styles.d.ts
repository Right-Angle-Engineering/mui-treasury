export declare type GrowAvatarStyleProps = {
    src: string;
    blur?: string;
    size?: string | number;
    radius?: string | number;
    opacity?: number;
};
export declare type GrowAvatarClassKey = keyof ReturnType<typeof growAvatarStyles>;
declare const growAvatarStyles: () => Record<"root", import("@mui/styles").CSSProperties | import("@mui/styles").CreateCSSProperties<GrowAvatarStyleProps> | import("@mui/styles").PropsFunc<GrowAvatarStyleProps, import("@mui/styles").CreateCSSProperties<GrowAvatarStyleProps>>>;
export default growAvatarStyles;
