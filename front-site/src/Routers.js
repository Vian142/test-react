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
import StatisticsPage from './components/back/pages/StatisticsPage/StatisticsPage';
import TestAdd from './components/back/pages/TestsBack/TestAdd/TestAdd';
import TestInfo from './components/back/pages/TestsBack/TestInfo/TestInfo';
import ProfilePage from './components/back/pages/Profile/ProfilePage/ProfilePage';

// /////////////////////////////////////////////////////////////////////////////
const Routers = () => (
  <Router>
    <div>
      <Route exact path='/' render={() => <LayoutFront><MainPage /></LayoutFront>} />
      <Route path='/tests' render={() => <LayoutFront><TestPage /></LayoutFront>} />
      <Route path='/Materials' render={() => <LayoutFront><Materials /></LayoutFront>} />
      <Route path='/about' render={() => <LayoutFront><About /></LayoutFront>} />
      <Route exact path='/admin' render={() => <LayoutBack><AdminPage /></LayoutBack>} />
      <Route path='/admin/profile' render={() => <LayoutBack><ProfilePage /></LayoutBack>} />
      <Route path='/admin/tests' render={() => <LayoutBack><TestsBack /></LayoutBack>} />
      <Route path='/admin/addtest' render={() => <LayoutBack><TestAdd /></LayoutBack>} />
      <Route path='/admin/tests/:id' render={() => <LayoutBack><TestInfo /></LayoutBack>} />
      <Route path='/admin/statistics' render={() => <LayoutBack><StatisticsPage /></LayoutBack>} />
    </div>
  </Router>
);

// /////////////////////////////////////////////////////////////////////////////
export default Routers;

// /////////////////////////////////////////////////////////////////////////////