import React, { forwardRef } from 'react';
import { createButton } from '@gluestack-ui/button';
import { Root, Group, Spinner, Text, Icon } from './styled-components';
import { Icon as IconComp } from '../Icons';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType, IColorSchemes } from '../../types';

// @ts-ignore
const AccessibleIconButton = createButton({
  Root,
  Text,
  Group,
  Spinner,
  Icon,
}) as any;

type IIconButtonProps = {
  icon?: any;
  colorScheme?: IColorSchemes;
};

const NewIconButton = forwardRef(
  (
    {
      children,
      isDisabled,
      icon,
      colorScheme = 'primary',
      variant = 'ghost',
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleIconButton
        colorScheme={colorScheme}
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
        isDisabled={isDisabled}
      >
        {icon ? icon : <IconComp {...props._icon}>{children}</IconComp>}
      </AccessibleIconButton>
    );
  }
);

const IconButtonTemp = NewIconButton as any;

export type IIconButtonComponentType<Button> = GenericComponentType<
  Button,
  {},
  IIconButtonProps
>;

export const IconButton = IconButtonTemp as IIconButtonComponentType<
  typeof AccessibleIconButton
>;
