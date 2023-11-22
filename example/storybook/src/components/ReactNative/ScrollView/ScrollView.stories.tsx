import type { ComponentMeta } from '@storybook/react-native';
import React from 'react';
import { Example } from './ScrollView';
export const ScrollView = () => {
  return <Example />;
};
const ScrollViewMeta: ComponentMeta<typeof ScrollView> = {
  title: 'stories/React Native/ScrollView',
  component: ScrollView,
};

export default ScrollViewMeta;
