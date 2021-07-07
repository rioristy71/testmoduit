import React from 'react';
import Sidemenu from './Sidemenu';
import "./App.css";
import { Question1 } from './Question1';
import { Question2 } from './Question2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Sidemenu /> 
        <div className='routing'>
        <Switch>
          <Route path="/Question1">
            <Question1 />
          </Route>
          <Route path="/Question2">
            <Question2 />
          </Route>
        </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
