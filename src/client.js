import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Routers from './Routers';
import App from './components/App';
import MainPage from './components/pages/MainPage/MainPage';
import TestPage from './components/pages/Tests/TestsPage/TestsPage';

ReactDOM.render(
  <Router>
    <App>
      <Route path='/' exact='/' component={MainPage} />
      <Route path='/tests' component={TestPage} />
    </App>
  </Router>,
  document.getElementById('root'),
);

if(module.hot) {
  module.hot.accept();
}
