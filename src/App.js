import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions'
import Ownership from './pages/Ownership'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/terms-and-conditions' component={TermsAndConditions} />
          <Route path='/ownership' component={Ownership} />
        </Switch>
        <Footer />
      </Router> 
    );
  }
}

export default App;
