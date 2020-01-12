import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Place from './pages/Place';
import Bestmans from './pages/Bestmans';
import Gallery from './pages/Gallery';
import GiftList from './pages/GiftList';
import History from './pages/History';
import Thanks from './pages/Thanks';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/place" component={Place} />
      <Route path="/bestmans" component={Bestmans} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/giftlist" component={GiftList} />
      <Route path="/history" component={History} />
      <Route path="/thanks" component={Thanks} />
    </Switch>
  );
}
