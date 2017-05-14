// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LayoutFront from './components/front/LayoutFront/LayoutFront';
import MainPage from './components/front/pages/MainPage/MainPage';
import TestPage from './components/front/pages/Tests/TestsPage/TestsPage';
import About from './components/front/pages/About/About';
import Materials from './components/front/pages/Materials/Materials';
import LayoutBack from './components/back/LayoutBack/LayoutBack';
import AdminPage from './components/back/pages/AdminPage/AdminPage';
import TestsBack from './components/back/pages/TestsBack/TestsBack';

// /////////////////////////////////////////////////////////////////////////////
const Routers = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => <LayoutFront><MainPage/></LayoutFront>} />
      <Route exact path='/tests' render={() => <LayoutFront><TestPage/></LayoutFront>} />
      <Route exact path='/Materials' render={() => <LayoutFront><Materials/></LayoutFront>} />
      <Route exact path='/about' render={() => <LayoutFront><About/></LayoutFront>} />
      <Route path='/admin' render={() => <LayoutBack><AdminPage/></LayoutBack>} />
      <Route exact path='/admin/tests' render={() => <LayoutBack><TestsBack/></LayoutBack>} />
    </div>
  </Router>
);

// /////////////////////////////////////////////////////////////////////////////
export default Routers;

// /////////////////////////////////////////////////////////////////////////////