import * as React from 'react';
import { ClassNameMap } from '@mui/styles';
export interface StyledComponentProps<ClassKey extends string = string> {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ClassNameMap<ClassKey>>;
    innerRef?: React.Ref<any>;
}
/**
 * A component whose root component can be controlled via a `component` prop.
 *
 * Adjusts valid props based on the type of `component`.
 */
export interface OverridableComponent<M extends OverridableTypeMap> {
    <C extends React.ElementType>(props: {
        component: C;
    } & OverrideProps<M, C>): JSX.Element;
    (props: DefaultComponentProps<M>): JSX.Element;
}
/**
 * Props of the component if `component={Component}` is used.
 */
export declare type OverrideProps<M extends OverridableTypeMap, C extends React.ElementType> = (BaseProps<M> & Omit<React.ComponentPropsWithRef<C>, keyof CommonProps<M>>);
/**
 * Props if `component={Component}` is NOT used.
 */
export declare type DefaultComponentProps<M extends OverridableTypeMap> = BaseProps<M> & Omit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;
/**
 * Props defined on the component (+ common material-ui props).
 */
export declare type BaseProps<M extends OverridableTypeMap> = M['props'] & CommonProps<M>;
/**
 * Props that are valid for material-ui components.
 */
export interface CommonProps<M extends OverridableTypeMap> extends StyledComponentProps<M['classKey']> {
    className?: string;
    style?: React.CSSProperties;
}
export interface OverridableTypeMap {
    props: {};
    defaultComponent: React.ElementType;
    classKey: string;
}
/**
 * @deprecated Not used in this library.
 */
export declare type Simplify<T> = T extends any ? {
    [K in keyof T]: T[K];
} : never;
/**
 * @deprecated Not used in this library.
 */
export declare type SimplifiedPropsOf<C extends React.ElementType> = Simplify<React.ComponentProps<C>>;
