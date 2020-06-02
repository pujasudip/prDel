import React, { Component } from 'react';
import './App.css';
import Home from './user-list/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './user-list/Profile';
import ProfileEdit from './user-list/ProfileEdit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile} />
            <Route path="/edit/:id" component={ProfileEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
