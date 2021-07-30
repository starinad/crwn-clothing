import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
