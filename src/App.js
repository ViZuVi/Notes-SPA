import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import About from './pages/About';
import Archive from './pages/Archive';
import Home from './pages/Home';

const App = () => {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            
            <Switch>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/archive'} component={Archive}/>
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App
