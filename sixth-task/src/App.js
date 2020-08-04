import React, { Component } from 'react';
import MainPage from './components/main-page';
import EmployeesPage from './components/employees';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation';
import { Context } from './context.js';
export default class App extends Component {
  state = {
    itemList: [],
    label: ''

};
componentDidMount(){
  if (this.state.itemList.length === 0) {
    fetch(`https://reqres.in/api/users?per_page=12`)
    .then(res=> res.json())
    .then( data => this.setState({itemList: data.data}));
  }
}

onDelete = (id) => {
  this.setState(({ itemList }) => {
    const index = itemList.findIndex((el) => el.id === id );
    
    
    const newArr = [ ...itemList.slice(0, index), 
       ...itemList.slice(index + 1)]
    return {
      itemList: newArr
    }
    
  })
}

onLabelChange= (e) => {
  this.setState({
      label: e.target.value
  });
  
}

onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label) {
    this.setState(state => ({
      itemList: [...state.itemList, {
        first_name: state.label.trim(),
        id: new Date().getMilliseconds(),
      }],
      label: ''
    }))
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
                onDelete: this.onDelete,
                onLabelChange: this.onLabelChange,
                onSubmit: this.onSubmit,
                
                
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