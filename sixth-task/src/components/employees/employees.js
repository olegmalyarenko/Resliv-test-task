import React, { useContext } from 'react';
import { Context } from '../../context.js';
import Person from '../person';

const EmployeesPage = () => {
  const context = useContext(Context);
      
        
      return (

        <div>   
          <h3>Работники</h3>
          <ul className='item-list list-group'>
          {context.state.itemList.map(user => <Person user={user}/>)}
        </ul>
          
        </div>
      
  )
 }
  
 export default EmployeesPage;