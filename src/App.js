import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
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
          <Route exact path='/login'>
            <h2>Login Page</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
