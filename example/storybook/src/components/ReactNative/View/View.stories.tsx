import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Example } from './View';
export const View = () => {
  return <Example />;
};
const ViewMeta: ComponentMeta<typeof View> = {
  title: 'stories/React Native/View',
  component: View,
};

export default ViewMeta;
