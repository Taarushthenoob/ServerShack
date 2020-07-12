import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Home from './Home';
import VideoAndImages from './VideoAndImages';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <div className="ui container">
              <Route exact path="/videoandimages" component={VideoAndImages} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
