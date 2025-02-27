declare const plainTabsStylesHook: {
    useTabs: (props?: any) => Record<"indicator", string>;
    useTabItem: (props?: any) => Record<"root" | "selected" | "wrapper", string>;
};
declare const chromeTabsStylesHook: {
    useTabs: (props?: any) => Record<"indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const containedTabsStylesHook: {
    useTabs: (props?: any) => Record<"indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const elevatedTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const firebaseTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const insideTriangleTabsStylesHook: {
    useTabs: (props?: any) => Record<"indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const instagramTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "fixed" | "indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const pillTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator" | "centered", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const serratedTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator" | "scroller", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const twitterIconTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
    useBadge: (props?: any) => Record<"root" | "colorPrimary", string>;
};
declare const twitterTabsStylesHook: {
    useTabs: (props?: any) => Record<"root" | "indicator", string>;
    useTabItem: (props?: any) => Record<never, string>;
};
declare const appleTabsStylesHook: {
    useTabs: (props?: any) => Record<never, string>;
    useTabItem: (props?: any) => Record<never, string>;
};
export * from './gmail';
export { chromeTabsStylesHook, containedTabsStylesHook, elevatedTabsStylesHook, firebaseTabsStylesHook, insideTriangleTabsStylesHook, instagramTabsStylesHook, pillTabsStylesHook, plainTabsStylesHook, serratedTabsStylesHook, twitterIconTabsStylesHook, twitterTabsStylesHook, appleTabsStylesHook, };
