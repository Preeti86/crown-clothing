import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/Homepage/HomePage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx'; 


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={shopPage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
