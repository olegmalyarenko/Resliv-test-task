import React, { Component } from 'react';
import MainPage from './components/main-page';
import EmployeesPage from './components/employees';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
export default class App extends Component {
  render() {
      return (
    <div className="App">
       
       <Router>
           <Navigation/>
           <Switch>
             <Route path='/' component={MainPage} exact />
             <Route path='/employees' component={EmployeesPage} />
           </Switch> 

           

        </Router>
          
      
    </div>
  );
  }
}