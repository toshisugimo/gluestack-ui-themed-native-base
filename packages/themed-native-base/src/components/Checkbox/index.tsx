import React, { forwardRef, cloneElement } from 'react';
import { Root, Indicator, Icon, Label, Group } from './styled-components';
import { createCheckbox } from '@gluestack-ui/checkbox';
import { CheckIcon } from '../Icons';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType, IColorSchemes } from '../../types';

const AccessibleCheckbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

const CheckboxTemp = forwardRef(
  (
    { colorScheme = 'primary', children, icon: IconPassed, ...props }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleCheckbox
        colorScheme={colorScheme}
        {...resolvedProps}
        ref={ref}
      >
        <AccessibleCheckbox.Indicator>
          <AccessibleCheckbox.Icon
            as={
              IconPassed
                ? () =>
                    cloneElement(IconPassed, {
                      h: 'full',
                      w: 'full',
                    })
                : CheckIcon
            }
          />
        </AccessibleCheckbox.Indicator>
        {children ? (
          <AccessibleCheckbox.Label>{children}</AccessibleCheckbox.Label>
        ) : (
          <></>
        )}
      </AccessibleCheckbox>
    );
  }
) as any;

const CheckboxGroupTemp = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleCheckbox.Group
        children={children}
        {...resolvedProps}
        ref={ref}
      />
    );
  }
);

const CheckboxNew = CheckboxTemp as any;
CheckboxNew.Group = CheckboxGroupTemp;

export type ICheckboxComponentType<Checkbox, Group> = GenericComponentType<
  Checkbox,
  {},
  { colorScheme: IColorSchemes; icon: JSX.Element }
> & {
  Group: GenericComponentType<Group>;
};

export const Checkbox = CheckboxNew as ICheckboxComponentType<
  typeof AccessibleCheckbox,
  typeof AccessibleCheckbox.Group
>;
