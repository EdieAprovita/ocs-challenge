import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Teacher from './components/Teacher/Teacher';
import Student from './components/Student/Student';

function App() {
  return (
    <div className='container-fluid'>
      <Header />

      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/teachers' component={Teacher} />
        <Route path='/students' component={Student} />
      </Switch>
    </div>
  );
}

export default App;
