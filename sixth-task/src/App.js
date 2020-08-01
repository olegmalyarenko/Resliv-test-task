import React, { Component } from 'react';
import MainPage from './components/main-page';
import EmployeesPage from './components/employees';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import { Context } from './context.js';
export default class App extends Component {
  state = {
    itemList: [],
    status: true,

};
componentDidMount(){
  if (this.state.itemList.length === 0) {
  fetch(`https://reqres.in/api/users?per_page=12`)
  .then(res=> res.json())
  .then( data => {
    this.setState({
      itemList: data.data
    })
    console.log(this.state.itemList);
  })
  
}


}
  render() {
      return (
    <div className="App">
       
       <Router>
           <Navigation/>
           <Switch>
           <Context.Provider
              value={{
                state: this.state,
                
              }}>
             <Route path='/' component={MainPage} exact />
             <Route path='/employees' component={EmployeesPage} />
             </Context.Provider>
           </Switch> 

           

        </Router>
          
      
    </div>
  );
  }
}