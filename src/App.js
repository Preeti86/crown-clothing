import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/Homepage/HomePage.component';
import shopPage from './pages/shop/shop.component'; 

import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Header from './components/header/header.component';

import { GlobalStyle } from './global.styles';

import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component{
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(Snapshot => {
          setCurrentUser({
            id: Snapshot.id,
            ...Snapshot.data()
           });
        });
      }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
      return (
        <div>
          <GlobalStyle />
          <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={shopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route 
              exact 
              path='/signin' 
              render={() => 
                this.props.currentUser ? (
                  <Redirect to='/' />
                  ) : (
                    <SignInAndSignUpPage />
                    )
                  }
                />         
          </Switch>       
        </div>
      );
    }
  }

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
