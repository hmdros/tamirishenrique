import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import GlobalStyles from './styles/global';

import Burger from './components/Burger';
import Menu from './components/Menu';

import Routes from './routes';

function App() {
  const [open, setOpen] = useState(window.screen.availWidth >= 576);

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <BrowserRouter>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
