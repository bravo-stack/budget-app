import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import AppRouter from './routing/router';

function App() {
    return (
        <ChakraProvider>
            <AppRouter />
        </ChakraProvider>
    );
}

export default App;
