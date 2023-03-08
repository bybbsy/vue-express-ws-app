import React, { useEffect, useRef } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';
import { WebsocketsContext } from './contexts/websocket.context';
import { SocketService } from './services/websocket.service';

function App() {
  const clientRef = useRef(null);

  const socketService = new SocketService();
  return (
    <WebsocketsContext.Provider value={socketService}>
    <ChakraProvider >
      <RouterProvider router={router}/>
    </ChakraProvider>
    </WebsocketsContext.Provider>
  );
}

export default App;
