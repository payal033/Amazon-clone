import React, { useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import Orders from './components/Orders';

function App() {

  const [{}, dispatch] = useStateValue()

  // to keep track who has signed in
  useEffect(() => {
    // will only run once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log(`The user is ` , authUser)

      if (authUser) {
        // the user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
