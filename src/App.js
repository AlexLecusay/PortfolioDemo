import React, { Component } from 'react';
import './App.css';

import{ 
  HashRouter as Router,
  Route,
   Switch,
     Redirect,
      Link
 } from "react-router-dom";

 //Importing Pages
 import MainPage from './pages/Index';
//  import NotFoundPage from './pages/404';
//  import Projects from './pages/Projects';

class App extends Component {
   render() {
     return(
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/projects" component={Projects} /> */}
        {/* <Route exact path="/404" component={NotFoundPage}/> */}
        {/* <Redirect to="/404"/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;

