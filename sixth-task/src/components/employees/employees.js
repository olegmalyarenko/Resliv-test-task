import React, { Component } from 'react';
import { Context } from '../../context.js';
import Person from '../person';
const context = useContext(Context);


export default class EmployeesPage extends Component {
      
  renderItems = (arr) => {
    return arr.map(({id , name}) => {
        return (
           <Person data = {context.props.listItem}/>
          )
    })
   }
   
    render(){
      const { itemList } = context.state;
      const items = this.renderItems(itemList);
      return (

        <div>   
          <h3>Работники</h3>
          <ul className='item-list list-group'>
           {items}
        </ul>
          <div >
        {context.state.listItem.map(user => (
          <li key={user.id} user={user}  />
        ))}
      </div>
        </div>
      
  )
 }
  
}
