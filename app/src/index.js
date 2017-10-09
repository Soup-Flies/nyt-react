import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SavedArticle from './components/container/SavedArticle';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'




ReactDOM.render(
  <BrowserRouter>
    <Switch >
      <Route exact path="/" component={App} />
      <Route exact path="/savedarticles" component={SavedArticle} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

registerServiceWorker();
