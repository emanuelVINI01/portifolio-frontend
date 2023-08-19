import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
