import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      {/* <Footer /> */}
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
