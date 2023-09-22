import { config } from './components/gluestack-ui.config';
import { propertyTokenMap } from './utils';

type aliases = typeof config.theme.aliases;
type tokens = typeof config.theme.tokens;
type propertyTokenMap = typeof propertyTokenMap;

export type ResponsiveValue<T> =
  | T
  | null
  | undefined
  | Array<T | null>
  | { [key in keyof tokens['breakpoints']]?: T };

type ReplaceDollar<T extends string> = T extends `$${infer N}` ? N : never;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

export type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

type ConvertKeys<T> = {
  [K in keyof T as K extends `:${infer R}` ? `_${R}` : K]: T[K];
};

export type GenericSXType<SXType> = {
  [K in keyof SXType]: K extends `_${string}`
    ? GenericSXType<ConvertKeys<SXType[K]>>
    : //@ts-ignore
      ResponsiveValue<ReplaceDollar<SXType[K]>>;
};

// export type GenericSXType<SXType> = {
//   [key in keyof Pick<SXType, ':hover'>]: '>>>';
// };
// {
//   [K in keyof Pick<
//     SXType,
//     '_android'
//     //@ts-ignore
//   >]: Pick<
//     SXType,
//     '_android'
//     //@ts-ignore
//   >[K];
// };

export type GenericPropTypes<ComponentPropsType> = Omit<
  ComponentPropsType,
  keyof aliases | keyof propertyTokenMap
> &
  RemoveNever<{
    [K in keyof Pick<
      ComponentPropsType,
      //@ts-ignore
      keyof aliases | keyof propertyTokenMap
    >]: ReplaceDollar<
      //@ts-ignore
      Pick<ComponentPropsType, keyof aliases | keyof propertyTokenMap>[K]
    >;
  }>;

export type GenericComponentType<PropType> = (
  //@ts-ignore
  // props: GenericPropTypes<React.ComponentProps<PropType>> &
  props: Omit<
    //@ts-ignore
    React.ComponentProps<PropType>,
    keyof aliases | keyof propertyTokenMap
  > &
    //@ts-ignore
    GenericSXType<ConvertKeys<React.ComponentProps<PropType>['sx']>>
) => JSX.Element;