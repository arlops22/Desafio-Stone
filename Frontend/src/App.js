import React from 'react';
import { Router } from 'react-router-dom';

import { PinProvider } from './Context/PinContext';

import Routes from './routes';
import history from './history';

function App() {
  
  return (
    <PinProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </PinProvider>
  )
  
}

export default App;
