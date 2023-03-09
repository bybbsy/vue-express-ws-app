import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';
import { WebsocketsContext } from './contexts/websocket.context';
import { useSocketService } from './services/websocket.service';

function App() {
  return (
    <WebsocketsContext.Provider value={useSocketService}>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </WebsocketsContext.Provider>
  );
}

export default App;
