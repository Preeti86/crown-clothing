import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/Homepage/HomePage.component.jsx';
import shopPage from './pages/shop/shop.component.jsx'; 
import Header from './components/header/header.component';

function App() {
  return (
    <div>
       <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={shopPage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
