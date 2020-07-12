import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Home from './Home';
import Blogs from './Blogs';
import NonProfitOrg from './NonProfitOrg';
import NewBlog from './NewBlog';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <div className="ui container">
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/nonprofitorg/new" component={NonProfitOrg} />
              <Route exact path="/blog/new" component={NewBlog} />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
