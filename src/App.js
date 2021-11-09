import React from 'react';
import { NativeBaseProvider, Box, Button } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
    <div>
      <Button>Button</Button>
      <Box>Hello world</Box>
    </div>
    </NativeBaseProvider>
  );
}