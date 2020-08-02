import React, { useContext } from 'react';
import { Context } from '../../context.js';
import Person from '../person';
import AddButton from '../add-button';

const EmployeesPage = () => {
  const context = useContext(Context);
      
        
      return (

        <div>   
          <h3>Работники</h3>
          <ul className='item-list list-group'>
          {context.state.itemList.map(user => <Person user={user}/>)}
        </ul>
          <AddButton
          value={context.state.label}
          change={context.onLabelChange}
          submit={context.onSubmit}/>
        </div>
      
  )
 }
  
 export default EmployeesPage;