import { styled } from '@dank-style/react';
import { Svg } from 'react-native-svg';

export default styled(
  Svg,
  {
    w: 20,
    h: 20,
    color: '$backgroundLight500',
    variants: {
      variant: {},
      size: {
        xs: {
          h: 12,
          w: 12,
        },
        sm: {
          h: 16,
          w: 16,
        },
        md: {
          h: 18,
          w: 18,
        },
        lg: {
          h: 20,
          w: 20,
        },
        xl: {
          h: 24,
          w: 24,
        },
      },
    },

    _dark: {
      color: '$backgroundDark400',
      h: 16,
      w: 16,
    },
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  }
);