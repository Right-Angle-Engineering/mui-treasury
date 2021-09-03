/// <reference types="react" />
import { Theme } from '@mui/material';
import { Gap } from './core';
import { Breakpoint } from '@mui/system';
export declare const getThemeCssValue: (gap: string | number, theme?: Pick<Theme, 'spacing'>) => string;
export declare const resolveGap: (gap: string | number, theme?: Pick<Theme, 'spacing'>) => import("react").ReactText;
export declare const gapToCss: (theme: Pick<Theme, 'breakpoints' | 'spacing'>, resolver?: (gap: string | number, theme?: Pick<Theme, 'spacing'>) => import("react").ReactText) => (gap: Gap) => Gap;
export declare const getLowerMediaQuery: ({ breakpoints }: Pick<Theme, 'breakpoints'>, bp: Breakpoint | number) => string;
