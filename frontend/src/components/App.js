import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Home from './Home.js';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component= {Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
