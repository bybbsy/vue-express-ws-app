import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ChakraProvider } from '@chakra-ui/react';
import { WebsocketsContext } from './contexts/websocket.context';
import { useSocketService } from './services/websocket.service';
import { Provider} from 'react-redux';
import { store } from './store/store';
import { useAppDispatch } from './store/hooks';
import { setEmail } from './store/user/reducers';

function App() {
  return (
    <Provider store={store}>
      <WebsocketsContext.Provider value={useSocketService}>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </WebsocketsContext.Provider>
    </Provider>
  );
}

export default App;
