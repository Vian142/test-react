import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import MainPage from './components/pages/MainPage/MainPage';
import TestPage from './components/pages/Tests/TestsPage/TestsPage';

const Routers = <Router>
    <App>
        <Route path='/' component={MainPage} >
            <Route path='tests' component={TestPage} />
        </Route>
    </App>
</Router>;

export default Routers;
