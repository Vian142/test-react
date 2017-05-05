import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';
import MainPage from './components/pages/MainPage/MainPage';
import TestPage from './components/pages/Tests/TestsPage/TestsPage';
import About from './components/pages/About/About';
import Materials from './components/pages/Materials/Materials';

const Routers = () => (
    <Router>
        <App>
            <Route path='/' exact={true} component={MainPage} />
            <Route path='/tests' component={TestPage} />
            <Route path='/about' component={About} />
            <Route path='/materials' component={Materials} />
        </App>
    </Router>
);

export default Routers;
