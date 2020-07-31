import React, { Component } from 'react';
import { BrouserRouter as Router } from 'react-router-dom';


export default class App extends Component() {
  render() {
      return (
    <div className="App">
      <header className="App-header">
          <Router>
              <Route path='/' component={MainPage} />
              <Route path='/employees' component={EmployeesPage} />

          </Router>
       
        
      </header>
    </div>
  );
  }
}