import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch></Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
