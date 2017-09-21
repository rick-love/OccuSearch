import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Tasks from './Tasks';
import Header from './Header'
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/Tasks' component={Tasks} />
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById('root'));
registerServiceWorker();
