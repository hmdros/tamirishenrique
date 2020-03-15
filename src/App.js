import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Burger from './components/Burger';
import Menu from './components/Menu';

import Routes from './routes';

function App() {
  const [open, setOpen] = useState(false);

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
