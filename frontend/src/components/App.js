import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import history from '../history';
import Home from './Home.js';
import  './Home.css';

const App = () => {
  return (
    <div className="ui container backgimg">
      <Router history={history}>
        <div >
          <div  className=" grad"><Header /></div>
          <div className="nocol">
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br />   
          </div>
          <Switch>
            <Route exact path='/' component= {Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
