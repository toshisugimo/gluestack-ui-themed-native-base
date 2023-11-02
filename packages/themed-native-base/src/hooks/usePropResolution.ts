import { useStyled } from '@gluestack-style/react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from '../utils';

export function usePropResolution(props: any) {
  const styledContext = useStyled();
  if (props) {
    const propsWithDollarSigns = addDollarSignsToProps(
      props,
      styledContext.config
    );

    const sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      styledContext.config
    );
    if (!sxProps.hasOwnProperty('sx')) {
      sxProps.sx = {};
    }
    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];

      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });

    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];
      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });

    return sxProps;
  }
  return props;
}
