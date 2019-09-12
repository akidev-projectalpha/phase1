import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import Login from './pages/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Nav} ></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;