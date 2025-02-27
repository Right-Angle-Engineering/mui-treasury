/// <reference types="react" />
import { BoxProps } from '@mui/material/Box';
import { Position } from './core';
export declare type ItemProps = {
    position?: Position;
    grow?: boolean | number;
    shrink?: number;
    stretched?: boolean;
    gapDisabled?: boolean;
    cssPosition?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
} & BoxProps;
declare const Item: ({ className, position, cssPosition, grow, shrink, stretched, gapDisabled, ...props }: ItemProps) => JSX.Element;
export default Item;
