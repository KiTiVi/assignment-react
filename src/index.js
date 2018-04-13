import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <Route component={App} />
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
