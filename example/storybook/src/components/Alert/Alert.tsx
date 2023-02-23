import React from 'react';

import Wrapper from '../Wrapper';
import { Root, Icon, Text } from '../styled-components/alert';
import { Center } from '../Center/Center';
import { InfoIcon } from '../Icons/Icons';

const Alert: any = Root;
Alert.Icon = Icon;
Alert.Text = Text;

export function AlertTemp({ ...props }: any) {
  return (
    <Wrapper>
      <Center>
        <Alert {...props}>
          <Alert.Icon>
            <InfoIcon />
          </Alert.Icon>
          <Alert.Text>Selection successfully moved!</Alert.Text>
        </Alert>
      </Center>
    </Wrapper>
  );
}

export default AlertTemp;
export { Alert };