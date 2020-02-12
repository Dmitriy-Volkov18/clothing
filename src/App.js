import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop'
import Header from './components/header/header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/shop' component={ShopPage}/> 
      </Switch>
    </div>
  );
}

export default App;
