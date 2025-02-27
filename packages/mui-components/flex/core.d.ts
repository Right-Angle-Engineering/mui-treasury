import React from 'react';
import { Breakpoint } from '@mui/system';
declare type FlexContextValue = 'row' | 'column' | 'row-column' | 'column-row';
export declare type At = Breakpoint | number;
export declare const FlexProvider: React.Provider<FlexContextValue>;
export declare const GapProvider: React.Provider<Gap>;
export declare type Position = 'left' | 'right' | 'top' | 'bottom' | 'middle' | 'middle-right' | 'center' | string;
export declare const positionInsideRow: (position: Position) => {
    marginLeft: string;
    alignSelf?: undefined;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft?: undefined;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft: string;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft: string;
    marginRight: string;
};
export declare const positionInsideColumn: (position: Position) => {
    alignSelf: string;
    marginTop?: undefined;
    marginBottom?: undefined;
} | {
    marginTop: string;
    alignSelf?: undefined;
    marginBottom?: undefined;
} | {
    marginTop: string;
    marginBottom: string;
    alignSelf?: undefined;
} | {
    alignSelf: string;
    marginTop: string;
    marginBottom: string;
};
export declare const useGapCtx: () => Gap;
export declare const useGapLookup: (gap: Gap) => {
    isValidGap: boolean;
    hasInheritedGap: boolean;
    calculatedGap: Gap;
    itemProps: {
        p: Gap;
        m: Gap;
    };
};
export declare const useGapItem: () => {
    p: Gap;
};
export declare const useFlexCtx: () => FlexContextValue;
export declare const useFlexStyles: (position: Position) => {
    marginLeft: string;
    alignSelf?: undefined;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft?: undefined;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft: string;
    marginRight?: undefined;
} | {
    alignSelf: string;
    marginLeft: string;
    marginRight: string;
} | {
    alignSelf: string;
    marginTop?: undefined;
    marginBottom?: undefined;
} | {
    marginTop: string;
    alignSelf?: undefined;
    marginBottom?: undefined;
} | {
    marginTop: string;
    marginBottom: string;
    alignSelf?: undefined;
} | {
    alignSelf: string;
    marginTop: string;
    marginBottom: string;
};
export declare type Gap = number | string | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string | number>>;
export declare type ProviderProps = {
    flexDirection: FlexContextValue;
    gap: Gap;
};
export declare const Provider: ({ flexDirection, gap, children, }: React.PropsWithChildren<ProviderProps>) => JSX.Element;
export declare const useBreakpointLookup: (at: At) => {
    calculatedAt: number | "xs" | "sm" | "md" | "lg" | "xl";
};
export declare const BreakpointProvider: ({ at, children, }: React.PropsWithChildren<{
    at: At;
}>) => JSX.Element;
export {};
