import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SingleRoom from './components/SingleRoom';
import Rooms from './components/Rooms';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
