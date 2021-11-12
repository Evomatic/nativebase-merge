import React from 'react';
import { NativeBaseProvider, Box, Button, Radio, Switch } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
    <div>
      <Radio.Group ><Radio>One</Radio></Radio.Group>
      {/* <Button>Button</Button> */}
      {/* <Box>Hello world</Box> */}
      <Switch />
    </div>
    </NativeBaseProvider>
  );
}