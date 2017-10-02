import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Task from './Task';
import Header from './Header'
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/Task' component={Task} history={customHistory} />
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById('root'));
registerServiceWorker();
