import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import DigimonListPage from './pages/DigimonListPage';
import DigimonDetailsPage from './pages/DigimonDetailsPage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" component={DigimonListPage} />
          <Route exact path="/digimon/:id" component={DigimonDetailsPage} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
