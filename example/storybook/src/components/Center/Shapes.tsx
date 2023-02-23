import type { ComponentStory } from '@storybook/react-native';
import { Text } from '../Text/Text';
import { HStack } from '../HStack/HStack';
import React from 'react';
import Wrapper from '../Wrapper';

import { Root } from '../styled-components/center';

export const Center = Root;

type MyCenterStory = ComponentStory<typeof Center>;

const ShapeExample: MyCenterStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <HStack space={'md'}>
        <Center bg="$pink800" h={60} w={60} borderRadius={999} {...props}>
          <Text color="white" fontWeight="bold">
            Circle
          </Text>
        </Center>
        {/* <Center bg="$violet500" h={60} w={60}>
          <Text color="white" fontWeight="bold">
            20
          </Text>
        </Center> */}
      </HStack>
    </Wrapper>
  );
};

export const Shapes = ShapeExample.bind({});

Shapes.parameters = {
  // options: {
  //   withKnobs: {
  //     disable: true, // do not show the knobs addon on this story
  //   },
  // },
  controls: {
    exclude: /.*/g,
  },
  docs: {
    description: {
      story:
        "Put any child element inside it, give it any width or/and height. It'll ensure the child is centered.",
    },
  },
};