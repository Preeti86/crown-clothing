import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import HomePage from './pages/Homepage/HomePage.component';
import shopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (
    <div>
       <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={shopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
