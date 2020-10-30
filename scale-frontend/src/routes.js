import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Game = React.lazy(() => import('./pages/Game/Game'));
const End = React.lazy(() => import('./pages/End/End'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/game' exact component={Game}></Route>
        <Route path='/end' exact component={End}></Route>
      </Switch>
    </BrowserRouter>
  );
}
