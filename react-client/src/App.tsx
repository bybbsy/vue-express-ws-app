import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { RoomLits } from './components/Rooms/RoomList';
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraBaseProvider>
      <div className="App">
        <header>
          <h1>A-Chat</h1>
        </header>
        <main className='main'>
          <section className='room__section'>
            <div className="main__container">
              <RoomLits />
            </div>
          </section>
        </main>
      </div>
    </ChakraBaseProvider>
  );
}

export default App;
