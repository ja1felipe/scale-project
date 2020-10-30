import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Game = React.lazy(() => import('./pages/Game/Game'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/game' exact component={Game}></Route>
      </Switch>
    </BrowserRouter>
  );
}
