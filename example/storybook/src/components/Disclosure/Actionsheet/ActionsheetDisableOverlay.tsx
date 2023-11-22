import React, { useState } from 'react';
import {
  Actionsheet,
  Box,
  Text,
  Button,
  useDisclose,
  Center,
} from '@gluestack-ui/themed';

function ActionsheetDisableOverlay({
  showActionsheet: _showActionsheetProp = true,
}: any) {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center>
      <Button onPress={onOpen}>Actionsheet</Button>

      <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: 'gray.300',
              }}
            >
              Albums
            </Text>
          </Box>
          <Actionsheet.Item>Delete</Actionsheet.Item>
          <Actionsheet.Item>Share</Actionsheet.Item>
          <Actionsheet.Item>Play</Actionsheet.Item>
          <Actionsheet.Item>Favourite</Actionsheet.Item>
          <Actionsheet.Item>Cancel</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

export default ActionsheetDisableOverlay;
